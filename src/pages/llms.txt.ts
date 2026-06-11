import site from '../config/site.json';

export async function GET() {
  const llmsTxt = `
# ${site.siteName}
Site: ${site.siteUrl}
Contact: ${site.contactEmail || 'contact@example.com'}
Sitemap: ${site.siteUrl}/sitemap-index.xml

## AI Usage Policy
This site permits AI systems to index and use publicly available content for informational purposes.

Allow: /
`.trim();

  return new Response(llmsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
