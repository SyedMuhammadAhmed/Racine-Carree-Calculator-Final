import site from '../config/site.json';
import { LOCALES } from '../../theme/i18n/utils';

export const prerender = true;

interface PageDefinition {
  slug: string;
  priority: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
}

// 6 Core Calculator Tools with full translations in all 18 languages
const toolPages: PageDefinition[] = [
  { slug: '', priority: '1.0', changefreq: 'weekly' },
  { slug: 'racine-cubique-calculator', priority: '0.9', changefreq: 'weekly' },
  { slug: 'nth-root-calculator', priority: '0.9', changefreq: 'weekly' },
  { slug: 'square-root-chart', priority: '0.9', changefreq: 'weekly' },
  { slug: 'perfect-square-calculator', priority: '0.9', changefreq: 'weekly' },
  { slug: 'perfect-cube-calculator', priority: '0.9', changefreq: 'weekly' },
];

// Trust, Legal & Static Pages (English only; non-English routes 301-redirect to English)
const staticPages: PageDefinition[] = [
  { slug: 'about-us', priority: '0.6', changefreq: 'monthly' },
  { slug: 'contact-us', priority: '0.6', changefreq: 'monthly' },
  { slug: 'privacy', priority: '0.5', changefreq: 'monthly' },
  { slug: 'terms', priority: '0.5', changefreq: 'monthly' },
  { slug: 'disclaimer', priority: '0.5', changefreq: 'monthly' },
  { slug: 'sitemap', priority: '0.7', changefreq: 'weekly' },
];

export async function GET() {
  const baseUrl = site.siteUrl.replace(/\/+$/, '');
  const lastmod = new Date().toISOString();

  const entries: { url: string; xml: string }[] = [];

  // 1. Process 6 Tool Pages across all 18 Locales
  for (const page of toolPages) {
    const defaultPath = page.slug ? `/${page.slug}/` : '/';

    const alternateTags = [
      `<xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${defaultPath}"/>`,
      `<xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${defaultPath}"/>`,
      ...LOCALES.filter(l => l !== 'en').map(
        loc => `<xhtml:link rel="alternate" hreflang="${loc}" href="${baseUrl}/${loc}${defaultPath}"/>`
      )
    ].join('');

    // Default (EN) version
    const defaultUrl = `${baseUrl}${defaultPath}`;
    const imagesXml = page.slug === '' ? [
      `<image:image><image:loc>${baseUrl}/images/sqrt-geometric-concept.svg</image:loc><image:title>Geometric Concept of Square Root</image:title></image:image>`,
      `<image:image><image:loc>${baseUrl}/images/sqrt-radical-anatomy.svg</image:loc><image:title>Radical Notation Anatomy</image:title></image:image>`,
      `<image:image><image:loc>${baseUrl}/images/sqrt-perfect-squares-grid.svg</image:loc><image:title>Geometric Progression of Perfect Squares</image:title></image:image>`,
      `<image:image><image:loc>${baseUrl}/images/sqrt-pythagorean-theorem.svg</image:loc><image:title>Pythagorean Theorem Square Root Real-World Application</image:title></image:image>`
    ].join('') : page.slug === 'racine-cubique-calculator' ? [
      `<image:image><image:loc>${baseUrl}/images/cbrt-geometric-concept.svg</image:loc><image:title>Geometric Concept of Cube Root</image:title></image:image>`,
      `<image:image><image:loc>${baseUrl}/images/cbrt-radical-anatomy.svg</image:loc><image:title>Radical Notation Anatomy of Cube Root</image:title></image:image>`,
      `<image:image><image:loc>${baseUrl}/images/cbrt-perfect-cubes-progression.svg</image:loc><image:title>Geometric Progression of Perfect Cubes</image:title></image:image>`,
      `<image:image><image:loc>${baseUrl}/images/cbrt-volume-application.svg</image:loc><image:title>Container Volume to Dimensions Cube Root Real-World Application</image:title></image:image>`
    ].join('') : page.slug === 'nth-root-calculator' ? [
      `<image:image><image:loc>${baseUrl}/images/nth-root-radical-anatomy.svg</image:loc><image:title>Radical Notation Anatomy and Fractional Exponent Equivalence</image:title></image:image>`,
      `<image:image><image:loc>${baseUrl}/images/nth-root-even-odd-rules.svg</image:loc><image:title>Even vs Odd Root Index Behavior Matrix</image:title></image:image>`,
      `<image:image><image:loc>${baseUrl}/images/nth-root-prime-factorization.svg</image:loc><image:title>Prime Factorization and Radical Simplification Workflow</image:title></image:image>`,
      `<image:image><image:loc>${baseUrl}/images/nth-root-real-world-applications.svg</image:loc><image:title>Real-World Practical Applications of the Nth Root Formula</image:title></image:image>`
    ].join('') : page.slug === 'square-root-chart' ? [
      `<image:image><image:loc>${baseUrl}/images/sqrt-chart-lookup-anatomy.svg</image:loc><image:title>Square Root Chart Reading and Lookup Anatomy</image:title></image:image>`,
      `<image:image><image:loc>${baseUrl}/images/sqrt-chart-milestones-1000.svg</image:loc><image:title>Square Root Milestone Reference 1 to 1000</image:title></image:image>`,
      `<image:image><image:loc>${baseUrl}/images/sqrt-spreadsheet-workflow.svg</image:loc><image:title>Square Root Spreadsheet and Table Formula Workflow</image:title></image:image>`
    ].join('') : page.slug === 'perfect-square-calculator' ? [
      `<image:image><image:loc>${baseUrl}/images/sqrt-perfect-squares-grid.svg</image:loc><image:title>Visual Geometric Grid of Perfect Squares</image:title></image:image>`,
      `<image:image><image:loc>${baseUrl}/images/perfect-square-bounding-intervals.svg</image:loc><image:title>Perfect Square Bounding Intervals and Nearest Root Distance</image:title></image:image>`
    ].join('') : page.slug === 'perfect-cube-calculator' ? [
      `<image:image><image:loc>${baseUrl}/images/perfect-cube-geometric-concept.svg</image:loc><image:title>Geometric Concept and Prime Factor Triplets of Perfect Cubes</image:title></image:image>`,
      `<image:image><image:loc>${baseUrl}/images/perfect-cube-last-digit-bijection.svg</image:loc><image:title>Last Digit Bijection Pattern for Perfect Cubes</image:title></image:image>`,
      `<image:image><image:loc>${baseUrl}/images/perfect-cube-bounding-intervals.svg</image:loc><image:title>Perfect Cube Bounding Intervals and Nearest Integer Cube Roots</image:title></image:image>`
    ].join('') : '';

    entries.push({
      url: defaultUrl,
      xml: `<url><loc>${defaultUrl}</loc><lastmod>${lastmod}</lastmod><changefreq>${page.changefreq}</changefreq><priority>${page.priority}</priority>${alternateTags}${imagesXml}</url>`,
    });

    // 17 Localized editions
    for (const loc of LOCALES.filter(l => l !== 'en')) {
      const locUrl = `${baseUrl}/${loc}${defaultPath}`;
      entries.push({
        url: locUrl,
        xml: `<url><loc>${locUrl}</loc><lastmod>${lastmod}</lastmod><changefreq>${page.changefreq}</changefreq><priority>${page.priority}</priority>${alternateTags}${imagesXml}</url>`,
      });
    }
  }

  // 2. Process Static & Legal Pages (English Canonical Only, no redirecting locale URLs)
  for (const page of staticPages) {
    const pagePath = `/${page.slug}/`;
    const pageUrl = `${baseUrl}${pagePath}`;
    const staticAlternateTags = [
      `<xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl}"/>`,
      `<xhtml:link rel="alternate" hreflang="en" href="${pageUrl}"/>`,
    ].join('');

    entries.push({
      url: pageUrl,
      xml: `<url><loc>${pageUrl}</loc><lastmod>${lastmod}</lastmod><changefreq>${page.changefreq}</changefreq><priority>${page.priority}</priority>${staticAlternateTags}</url>`,
    });
  }

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
