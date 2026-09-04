import site from '../config/site.json';

export const prerender = true;

export async function GET() {
  const baseUrl = site.siteUrl.replace(/\/+$/, '');
  const llmsTxt = `# ${site.siteName}

> Free, fast, and high-precision online calculator suite for calculating square roots (racine carrée), cube roots (racine cubique), and nth roots with step-by-step mathematical solutions and reference tables.

${site.siteName} provides instant calculations for all radical and root expressions. Every calculator includes exact decimal values, simplified radical forms, and step-by-step breakdowns for students, educators, and professionals.

## Calculators & Tools

- [Square Root Calculator](${baseUrl}/): Instant square root calculator with exact decimals, prominent simplified radical forms (e.g. √72 = 6√2), complex imaginary numbers (± r i for negative inputs), and step-by-step breakdowns.
- [Cube Root Calculator](${baseUrl}/racine-cubique-calculator/): Cube root calculator for positive and negative numbers with exact results, simplified cube radicals, and step explanations.
- [Nth Root Calculator](${baseUrl}/nth-root-calculator/): General root calculator to compute roots of any index or degree (4th root, 5th root, nth root).

## Multilingual Support
All calculators and educational guides are fully localized across 18 languages: English, Español, Français, Deutsch, Italiano, Português, Русский, हिन्दी, বাংলা, 日本語, 한국어, Bahasa Melayu, Polski, Bahasa Indonesia, العربية, Български, Türkçe, and Svenska.

## Guides & Documentation

- [About Us](${baseUrl}/about-us/): Mission, methodology, educational resources, and precision standards of Racine Carrée Calculator.
- [Contact Us](${baseUrl}/contact-us/): Support, questions, feedback, and math assistance.
- [Sitemap](${baseUrl}/sitemap/): Full directory of all calculator tools and translated versions.

## Legal & Policies

- [Privacy Policy](${baseUrl}/privacy/): Data privacy, cookie usage, and user protection policy.
- [Terms & Conditions](${baseUrl}/terms/): Terms of service for using our free calculator tools.
- [Disclaimer](${baseUrl}/disclaimer/): Educational disclaimer and mathematical accuracy terms.

## Optional

- [XML Sitemap](${baseUrl}/sitemap-index.xml): Full XML sitemap index for search engines and web crawlers.
`.trim();

  return new Response(llmsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, must-revalidate',
    },
  });
}

