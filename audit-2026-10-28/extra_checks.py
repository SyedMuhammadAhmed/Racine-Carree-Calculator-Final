import requests,json,time,hashlib
from pathlib import Path
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor
P=Path(__file__).parent
urls=['https://www.dcode.fr/racine-carree','https://calculracine.com/','https://www.calculatorsoup.com/calculators/algebra/squareroots.php','https://www.symbolab.com/solver/square-root-calculator']
def competitor(u):
    try:
        r=requests.get(u,timeout=25);s=BeautifulSoup(r.content,'html.parser')
        return {'url':u,'status':r.status_code,'bytes_decoded':len(r.content),'title':s.title.get_text() if s.title else '', 'h1':[x.get_text(' ',strip=True) for x in s.select('h1')],'canonical':[x.get('href') for x in s.select('link[rel=canonical]')],'hreflang_count':len(s.select('link[hreflang]')),'schema_types':[str(x.string)[:150] for x in s.find_all('script',type='application/ld+json')],'scripts':len(s.select('script[src]')),'stylesheets':len(s.select('link[rel=stylesheet]'))}
    except Exception as e:return {'url':u,'error':str(e)}
cs=list(ThreadPoolExecutor(4).map(competitor,urls))
(P/'competitor-tech.json').write_text(json.dumps(cs,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(cs,ensure_ascii=False,indent=2))
agents=['Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)','Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)']
bot=[]
for a in agents:
    for path in ['/','/fr/']:
        try:
            r=requests.get('https://www.racinecarreecalculatorr.com'+path,headers={'User-Agent':a},timeout=25)
            bot.append({'path':path,'agent':a,'status':r.status_code,'bytes_decoded':len(r.content),'body_hash':hashlib.sha256(r.content).hexdigest()})
        except Exception as e:bot.append({'path':path,'error':str(e)})
(P/'bot-probes.json').write_text(json.dumps(bot,indent=2),encoding='utf-8')
print('BOT PROBES',json.dumps(bot,indent=2))
