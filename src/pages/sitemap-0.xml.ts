import site from '../config/site.json';
import { LOCALES } from '../../theme/i18n/utils';

export const prerender = true;

interface PageDefinition {
  slug: string; // '' for home, or e.g. 'about-us'
  priority: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
}

const allPages: PageDefinition[] = [
  // 6 Calculators & Tools
  { slug: '', priority: '1.0', changefreq: 'weekly' },
  { slug: 'racine-cubique-calculator', priority: '0.9', changefreq: 'weekly' },
  { slug: 'nth-root-calculator', priority: '0.9', changefreq: 'weekly' },
  { slug: 'square-root-chart', priority: '0.9', changefreq: 'weekly' },
  { slug: 'perfect-square-calculator', priority: '0.9', changefreq: 'weekly' },
  { slug: 'perfect-cube-calculator', priority: '0.9', changefreq: 'weekly' },

  // Trust, Legal & Directory Pages
  { slug: 'about-us', priority: '0.5', changefreq: 'monthly' },
  { slug: 'contact-us', priority: '0.5', changefreq: 'monthly' },
  { slug: 'privacy', priority: '0.5', changefreq: 'monthly' },
  { slug: 'terms', priority: '0.5', changefreq: 'monthly' },
  { slug: 'disclaimer', priority: '0.5', changefreq: 'monthly' },
  { slug: 'sitemap', priority: '0.7', changefreq: 'weekly' },
];

export async function GET() {
  const baseUrl = site.siteUrl.replace(/\/+$/, '');
  const today = new Date().toISOString().split('T')[0] + 'T00:00:00.000Z';

  const entries: { url: string; xml: string }[] = [];

  for (const page of allPages) {
    const defaultPath = page.slug ? `/${page.slug}/` : '/';

    // Build hreflang alternates (en, 17 locales, and x-default)
    const alternateTags = [
      `<xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${defaultPath}"/>`,
      `<xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${defaultPath}"/>`,
      ...LOCALES.filter(l => l !== 'en').map(
        loc => `<xhtml:link rel="alternate" hreflang="${loc}" href="${baseUrl}/${loc}${defaultPath}"/>`
      )
    ].join('');

    // 1. Default (EN) version
    const defaultUrl = `${baseUrl}${defaultPath}`;
    entries.push({
      url: defaultUrl,
      xml: `<url><loc>${defaultUrl}</loc><lastmod>${today}</lastmod><changefreq>${page.changefreq}</changefreq><priority>${page.priority}</priority>${alternateTags}</url>`,
    });

    // 2. All 17 localized editions
    for (const loc of LOCALES.filter(l => l !== 'en')) {
      const locUrl = `${baseUrl}/${loc}${defaultPath}`;
      entries.push({
        url: locUrl,
        xml: `<url><loc>${locUrl}</loc><lastmod>${today}</lastmod><changefreq>${page.changefreq}</changefreq><priority>${page.priority}</priority>${alternateTags}</url>`,
      });
    }
  }

  // Sort alphabetically by URL (exact same ordering standard as wadpsizeconverter.com)
  entries.sort((a, b) => a.url.localeCompare(b.url));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${entries.map(e => e.xml).join('\n')}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, must-revalidate',
    },
  });
}
