"""Validate the actual generated SEO surface: run after npm run build."""
from pathlib import Path
from urllib.parse import urlparse, unquote, urljoin
import json
import xml.etree.ElementTree as ET
from bs4 import BeautifulSoup

root = Path('dist')
ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
urls = [n.text for n in ET.parse(root / 'sitemap-0.xml').findall('s:url/s:loc', ns)]
assert len(urls) == len(set(urls)) == 114
errors, pages, titles, descriptions = [], {}, {}, {}
for url in urls:
    path = urlparse(url).path
    file = root / path.lstrip('/') / 'index.html'
    soup = BeautifulSoup(file.read_text(encoding='utf-8'), 'html.parser')
    pages[path] = soup
    def check(condition, message):
        if not condition: errors.append(f'{path}: {message}')
    check(len(soup.find_all('h1')) == 1, 'H1 count')
    check(soup.select_one('link[rel=canonical]')['href'] == url, 'canonical mismatch')
    check(not any('noindex' in m.get('content', '').lower() for m in soup.select('meta[name=robots]')), 'noindex')
    title = soup.title.get_text(strip=True)
    desc = soup.select_one('meta[name=description]')['content']
    check(title not in titles, 'duplicate title')
    check(desc not in descriptions, 'duplicate description')
    titles[title], descriptions[desc] = path, path
    for script in soup.select('script[type="application/ld+json"]'):
        data = json.loads(script.string)
        if path in ['/privacy/', '/terms/', '/disclaimer/', '/contact-us/', '/about-us/']:
            check('WebApplication' not in json.dumps(data), 'app schema on support page')
    for asset in soup.select('script[src], link[rel=stylesheet]'):
        src = asset.get('src') or asset.get('href')
        if src.startswith('/'):
            check((root / src.lstrip('/')).exists(), f'missing asset {src}')

for path, soup in pages.items():
    for a in soup.select('a[href]'):
        url = urlparse(urljoin('https://www.racinecarreecalculatorr.com' + path, a['href']))
        if url.hostname != 'www.racinecarreecalculatorr.com': continue
        if url.path in pages and url.fragment:
            if not pages[url.path].find(id=unquote(url.fragment)):
                errors.append(f'{path}: broken fragment {a["href"]}')
    for alternate in soup.select('link[rel=alternate][hreflang]'):
        target = urlparse(alternate['href']).path
        if target not in pages: errors.append(f'{path}: missing hreflang target {target}')
        elif not pages[target].select_one(f'link[rel=alternate][href="https://www.racinecarreecalculatorr.com{path}"]'):
            errors.append(f'{path}: nonreciprocal hreflang {target}')

for css in (root / '_astro').glob('*.css'):
    if 'data:font' in css.read_text(encoding='utf-8'): errors.append(f'{css}: CSP-blocked inline font')
result = {'pages': len(pages), 'errors': errors, 'passed': not errors}
Path('audit-2026-10-28/build-checks.json').write_text(json.dumps(result, indent=2), encoding='utf-8')
print(json.dumps(result, indent=2))
assert not errors
