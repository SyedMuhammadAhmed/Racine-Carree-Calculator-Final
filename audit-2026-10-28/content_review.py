"""Read-only content inventory of every public sitemap page."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from collections import Counter
import requests, re, csv, json, xml.etree.ElementTree as ET
from bs4 import BeautifulSoup

out = Path(__file__).parent / 'content-review'
out.mkdir(exist_ok=True)
base = 'https://www.racinecarreecalculatorr.com'
ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
urls = [x.text for x in ET.fromstring(requests.get(base+'/sitemap-0.xml', timeout=20).content).findall('s:url/s:loc', ns)]
patterns = {
 'unbounded_or_precision_claim': r'exact decimals?|arbitrary.precision|any number|any range|unlimited|no limits|100% exact|zero lag',
 'search_engine_filler': r'most searched|type .{0,60} into search engines|search engine results|ranking',
 'advanced_jargon': r'cryptograph|eigenvalue|spectral|transcendental|quadratic residue|asymptotic|Newton.Raphson|complex plane',
 'english_ui': r'Click or hover|Real.world application|Interactive Anatomy|Click any component|Search number|Written & Verified',
}
def inspect(url):
 try:
  response=requests.get(url, timeout=18)
  soup=BeautifulSoup(response.content,'html.parser')
  slug=url.removeprefix(base).strip('/').replace('/','__') or 'home'
  (out/(slug+'.html')).write_text(response.text, encoding='utf-8')
  main=soup.find('main') or soup
  for node in main.select('script,style,nav'): node.decompose()
  paragraphs=[p.get_text(' ',strip=True) for p in main.select('p')]
  text=' '.join(paragraphs)
  sentences=[s for s in re.split(r'(?<=[.!?])\s+',text) if s.strip()]
  counts=[len(re.findall(r"\b[\w’'-]+\b",s)) for s in sentences]
  flags={k:len(re.findall(p,text,re.I)) for k,p in patterns.items()}
  lang=soup.html.get('lang','') if soup.html else ''
  return {'url':url,'status':response.status_code,'lang':lang,'title':soup.title.get_text() if soup.title else '',
    'paragraph_words':len(text.split()),'paragraphs':len(paragraphs),'avg_sentence_words':round(sum(counts)/max(1,len(counts)),1),
    'sentences_over_25_words':sum(n>25 for n in counts),'h2':[h.get_text(' ',strip=True) for h in main.select('h2')],
    'flags':flags,'examples':{k:[p for p in paragraphs if re.search(pattern,p,re.I)][:3] for k,pattern in patterns.items()}}
 except Exception as e: return {'url':url,'error':str(e)}
rows=list(ThreadPoolExecutor(5).map(inspect,urls))
(out/'inventory.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf-8')
with (out/'page-content-inventory.csv').open('w',encoding='utf-8-sig',newline='') as f:
 fields=['url','status','lang','title','paragraph_words','paragraphs','avg_sentence_words','sentences_over_25_words',*patterns]
 writer=csv.DictWriter(f,fieldnames=fields);writer.writeheader()
 for row in rows: writer.writerow({k:v for k,v in {**row,**row.get('flags',{})}.items() if k in fields})
print(json.dumps({'pages':len(rows),'errors':[r for r in rows if 'error' in r],
 'flagged_pages':{k:sum(r.get('flags',{}).get(k,0)>0 for r in rows) for k in patterns},
 'english_pages':[{k:r.get(k) for k in ['url','paragraph_words','avg_sentence_words','sentences_over_25_words','flags']} for r in rows if r.get('lang')=='en']},indent=2))
