import site from '../config/site.json';

export async function GET() {
  const robotsTxt = `
User-agent: *
Allow: /
Sitemap: ${site.siteUrl}/sitemap-index.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
