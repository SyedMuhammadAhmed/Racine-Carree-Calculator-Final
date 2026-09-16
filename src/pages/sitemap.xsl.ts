import fs from 'node:fs';
import path from 'node:path';

export const prerender = true;

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'sitemap.xsl');
  const content = fs.readFileSync(filePath, 'utf-8');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, must-revalidate',
    },
  });
}
