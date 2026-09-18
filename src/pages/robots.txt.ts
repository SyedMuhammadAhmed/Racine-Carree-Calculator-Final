import site from '../config/site.json';

export const prerender = true;

export async function GET() {
  const robotsTxt = `
User-agent: *
Allow: /
Disallow: /404
Disallow: /404/
Disallow: /cdn-cgi/
Disallow: /*?*lang=
# Block all query-string URLs — this site is fully static and serves no
# content via query parameters. Blocking these prevents duplicate-content
# issues from crawlers appending tracking or session params to URLs.
# This is intentional. Note: Googlebot may still report these as
# "Blocked by robots.txt" in Search Console, which is expected behaviour.
Disallow: /*?*

# AI & Search Engine Crawlers
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: ${site.siteUrl}/sitemap-index.xml
Sitemap: ${site.siteUrl}/sitemap.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, must-revalidate',
    },
  });
}
