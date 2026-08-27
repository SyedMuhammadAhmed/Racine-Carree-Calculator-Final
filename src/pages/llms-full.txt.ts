import site from '../config/site.json';

export const prerender = true;

export async function GET() {
  const baseUrl = site.siteUrl.replace(/\/+$/, '');
  const llmsFullTxt = `# ${site.siteName} — Full Documentation & Tools

> Comprehensive documentation, mathematical formulas, and tool reference for ${site.siteName}.

## About the Application
${site.siteName} (${baseUrl}) is a specialized math platform designed to compute square roots, cube roots, and nth roots with maximum precision. It provides exact decimal results, simplified radical expressions (e.g., √72 = 6√2), and step-by-step mathematical reasoning.

## Tools & Endpoints

### 1. Square Root Calculator
- URL: ${baseUrl}/
- Formula: √x = y where y² = x (for x ≥ 0)
- Capabilities:
  - Exact decimal result up to 10 decimal places.
  - Simplified radical form using prime factorization.
  - Identification of perfect vs. irrational squares.
  - Step-by-step manual computation breakdowns (Prime Factorization, Long Division, Newton-Raphson).

### 2. Cube Root Calculator (Racine Cubique)
- URL: ${baseUrl}/racine-cubique-calculator/
- Formula: ∛x = y where y³ = x (for all real numbers x)
- Capabilities:
  - Exact cube roots for positive and negative numbers (e.g., ∛(-27) = -3).
  - Simplified radical form (e.g., ∛54 = 3∛2).
  - Perfect cube identification.

### 3. Nth Root Calculator
- URL: ${baseUrl}/nth-root-calculator/
- Formula: ⁿ√x = y where yⁿ = x
- Capabilities:
  - Arbitrary degree roots (4th root, 5th root, 10th root, etc.).
  - Real solution validation for odd and even root indices.

## Core Mathematical Rules & Laws
1. Product Rule: √(a × b) = √a × √b (for a, b ≥ 0)
2. Quotient Rule: √(a / b) = √a / √b (for a ≥ 0, b > 0)
3. Power Rule: √(aⁿ) = (√a)ⁿ = a^(n/2)
4. Exponent Equivalent: ⁿ√x = x^(1/n)

## Reference Links
- Home: ${baseUrl}/
- Cube Root Tool: ${baseUrl}/racine-cubique-calculator/
- Nth Root Tool: ${baseUrl}/nth-root-calculator/
- About Us: ${baseUrl}/about-us/
- Contact: ${baseUrl}/contact-us/
- Privacy Policy: ${baseUrl}/privacy/
- Terms of Service: ${baseUrl}/terms/
- Disclaimer: ${baseUrl}/disclaimer/
- Sitemap: ${baseUrl}/sitemap/
`.trim();

  return new Response(llmsFullTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, must-revalidate',
    },
  });
}
