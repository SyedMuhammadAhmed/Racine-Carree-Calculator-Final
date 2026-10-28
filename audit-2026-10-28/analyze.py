import json,collections,re,requests,xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import urlsplit,urldefrag
from concurrent.futures import ThreadPoolExecutor
P=Path(__file__).parent
pages=json.loads((P/'crawl.json').read_text(encoding='utf-8'))
controls=json.loads((P/'controls.json').read_text(encoding='utf-8'))
byurl={p['url']:p for p in pages}
issues=[]
for p in pages:
    for a in p['links']:
        u,frag=urldefrag(a['href'])
        if u in byurl and frag and frag not in byurl[u]['ids']:issues.append({'source':p['url'],'href':a['href'],'text':a['text'],'issue':'missing_fragment'})
    if p['canonical']!=[p['url']]:issues.append({'source':p['url'],'issue':'canonical','value':p['canonical']})
    if len(p['h1'])!=1:issues.append({'source':p['url'],'issue':'h1_count','value':p['h1']})
    for alt in p['hreflang']:
        if alt['href'] not in byurl:issues.append({'source':p['url'],'issue':'hreflang_target_missing','value':alt})
        elif not any(a['href']==p['url'] for a in byurl[alt['href']]['hreflang']):issues.append({'source':p['url'],'issue':'hreflang_return_missing','value':alt})
links=sorted(set(urldefrag(a['href'])[0] for p in pages for a in p['links'] if urlsplit(a['href']).netloc=='www.racinecarreecalculatorr.com' and urldefrag(a['href'])[0] not in byurl))
assets=sorted(set(a for p in pages for a in p['assets']))
def check(u):
    try:
        r=requests.get(u,timeout=25);return {'url':u,'status':r.status_code,'final_url':r.url,'bytes':len(r.content),'headers':dict(r.headers)}
    except Exception as e:return {'url':u,'error':str(e)}
checks=list(ThreadPoolExecutor(4).map(check,sorted(set(links+assets))))
(P/'link-asset-checks.json').write_text(json.dumps(checks,indent=2),encoding='utf-8')
(P/'issues.json').write_text(json.dumps(issues,ensure_ascii=False,indent=2),encoding='utf-8')
print('ISSUES',collections.Counter(i['issue'] for i in issues));print('ASSETS/LINKS',len(checks),'ERRORS',[c for c in checks if c.get('status',0)>=400 or 'error' in c])
print('DUPLICATES', {key:[group for group in ([p['url'] for p in pages if p[key]==v] for v,c in collections.Counter(str(p[key]) for p in pages).items() if c>1) if group] for key in ['title','description','text_hash']})
for p in pages:
    if p['lang']=='en' or p['url'].endswith('/fr/') or p['url'].endswith('/fr/nth-root-calculator/'):
        print(json.dumps({k:p[k] for k in ['url','title','description','word_count','h1']},ensure_ascii=False))
for c in controls:
    if '/robots.txt' in c['url']:print('ROBOTS',c['body'])
    if c['url'].endswith('/sitemap-0.xml'):
        root=ET.fromstring(c['body']);print('LASTMOD',collections.Counter(n.text for n in root.findall('{*}url/{*}lastmod')))
print('HEADERS',pages[0]['headers'])
print('ISSUE SAMPLES',json.dumps(issues[:15],ensure_ascii=False))
