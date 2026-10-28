import requests, json, time, re, csv, hashlib
from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urljoin,urlsplit,urldefrag
from concurrent.futures import ThreadPoolExecutor
import xml.etree.ElementTree as ET

OUT=Path(__file__).parent
BASE='https://www.racinecarreecalculatorr.com'
def fetch(url):
    start=time.time()
    try:
        r=requests.get(url,timeout=35,headers={'User-Agent':'SEO-Audit/1.0 (public website review)'})
        r.encoding='utf-8'
        return {'url':url,'final_url':r.url,'status':r.status_code,'seconds':round(time.time()-start,3),'headers':dict(r.headers),'redirects':[{'url':h.url,'status':h.status_code,'location':h.headers.get('Location')} for h in r.history],'body':r.text,'bytes':len(r.content)}
    except Exception as e:return {'url':url,'error':str(e)}
controls=['/robots.txt','/sitemap-index.xml','/sitemap.xml','/sitemap-0.xml','/this-page-does-not-exist-seo-audit/','/404/','/?utm_source=seo-audit','/fr/about-us/','/nth-root-calculator','/index.html']
controls=[BASE+p for p in controls]+['http://racinecarreecalculatorr.com/','https://racinecarreecalculatorr.com/','http://www.racinecarreecalculatorr.com/']
raw=list(ThreadPoolExecutor(4).map(fetch,controls))
(OUT/'controls.json').write_text(json.dumps(raw,ensure_ascii=False,indent=2),encoding='utf-8')
urls=[]
for x in raw:
    if x['url']==BASE+'/sitemap-0.xml' and x.get('status')==200:
        root=ET.fromstring(x['body'])
        urls=[n.text for n in root.findall('{*}url/{*}loc')]
if not urls:urls=[BASE+'/']
pages=list(ThreadPoolExecutor(4).map(fetch,urls))
rows=[]
for p in pages:
    if 'body' not in p:rows.append(p);continue
    soup=BeautifulSoup(p['body'],'html.parser')
    def meta(n):
        t=soup.find('meta',attrs={'name':n});return t.get('content','') if t else ''
    def linkrel(n):return [t.get('href','') for t in soup.find_all('link',rel=n)]
    schemas=[]
    for s in soup.find_all('script',type='application/ld+json'):
        try:schemas.append(json.loads(s.string or s.get_text()))
        except:schemas.append({'parse_error':True})
    main=soup.find('main') or soup
    text=main.get_text(' ',strip=True)
    links=[{'href':urljoin(p['final_url'],a.get('href','')),'text':a.get_text(' ',strip=True)} for a in soup.find_all('a',href=True)]
    assets=[urljoin(p['final_url'],s.get('src') or s.get('href')) for s in soup.select('script[src],link[rel=stylesheet],img[src]')]
    row={k:v for k,v in p.items() if k!='body'}
    row.update(title=soup.title.get_text(strip=True) if soup.title else '',description=meta('description'),robots=meta('robots'),lang=soup.html.get('lang') if soup.html else '',canonical=linkrel('canonical'),h1=[h.get_text(' ',strip=True) for h in soup.find_all('h1')],headings=[{'level':h.name,'text':h.get_text(' ',strip=True)} for h in main.find_all(re.compile('^h[1-6]$'))],hreflang=[{'lang':a.get('hreflang'),'href':a.get('href')} for a in soup.find_all('link',hreflang=True)],schemas=schemas,word_count=len(text.split()),main_text=text,links=links,assets=assets,ids=[a['id'] for a in soup.find_all(id=True)],images=[{'src':i.get('src'),'alt':i.get('alt'),'width':i.get('width'),'height':i.get('height'),'loading':i.get('loading')} for i in soup.find_all('img')],text_hash=hashlib.sha256(text.encode()).hexdigest())
    rows.append(row)
    slug=urlsplit(p['url']).path.strip('/').replace('/','__') or 'home'
    (OUT/(slug+'.html')).write_text(p['body'],encoding='utf-8')
(OUT/'crawl.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf-8')
keys=['url','status','final_url','seconds','bytes','lang','title','description','robots','canonical','h1','word_count']
with (OUT/'page-inventory.csv').open('w',newline='',encoding='utf-8-sig') as f:
    w=csv.DictWriter(f,fieldnames=keys,extrasaction='ignore');w.writeheader();w.writerows(rows)
print(json.dumps({'pages':len(rows),'statuses':{str(s):sum(p.get('status')==s for p in rows) for s in set(p.get('status') for p in rows)},'controls':[{k:v for k,v in p.items() if k not in ['body','headers']} for p in raw]},indent=2))
