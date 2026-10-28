# Racine Carree Calculator — evidence-based SEO audit

Audit date: 28 October 2026. Website: https://www.racinecarreecalculatorr.com/

**Assessment:** The Search Console screenshot shows a sudden collapse in visibility around 15 September, rather than a slow loss of momentum. Current crawlability is broadly sound. The site has demonstrable product accuracy, localization, navigation, and credibility defects, but none has been proven to cause that historical collapse. Establishing whether Google dropped URLs, changed the canonical host, or sharply reduced rankings is the first recovery task. Publishing more translated pages or changing descriptions before that investigation would leave the central question unanswered.

No production changes were made. This folder contains audit evidence and recommendations only.

## 1. Evidence, coverage, and limitations

- Fetched all **114 URLs** in the live sitemap: six calculator/content templates × 18 languages = 108, plus six English support/legal/sitemap pages.
- Extracted HTTP status, redirects, canonical, robots meta, language, hreflang, titles, descriptions, headings, JSON-LD, main text, images, internal links, and section IDs for every sitemap page. Checked hreflang targets and return links across that inventory.
- Checked 13 infrastructure/URL variants and 44 distinct additional internal destinations and referenced script/style/image assets. These 44 checks do not include every CSS font URL or every external/social link.
- Manually reviewed core English/French content and used the live French calculator. Automated checks cover all languages; this is not a native-language editorial review of all 18 editions.
- Compared four competitor pages through direct HTTP inspection and public page review. Public searches provide candidate competitors, not a country/device-specific Google ranking report or a measured keyword-overlap dataset.
- Reviewed local Git changes near the loss. Git commit timestamps establish repository changes, not successful production deployments. The live `/app.js` exactly matches the local file by SHA-256; other local files must not be assumed to match the deployment. For example, live JSON-LD contains types beyond those in the current local layout.
- Used the user's Search Console screenshot; there is no authenticated Search Console, analytics, server-log, historical rank, or commercial backlink dataset in this audit.
- Ran public PageSpeed Insights mobile/desktop checks. An initial API call returned quota exhaustion; the browser-based public report completed successfully. Field Core Web Vitals were unavailable for the homepage.

Evidence files: `page-inventory.csv`, `crawl.json`, `controls.json`, `issues.json`, `link-asset-checks.json`, `competitor-tech.json`, `bot-probes.json`, `live-app.js`, and `search-console-screenshot.png`. Saved HTML snapshots preserve what the crawl actually saw. Word counts are approximate whitespace-token counts of `<main>` text, including table contents and some hidden UI help; they are not editorial word targets.

**Labels:** Verified = observed in live output or captured data. Hypothesis = a plausible explanation needing additional evidence. Opportunity = a proposed improvement, not a diagnosed ranking penalty. Priorities: P0 = diagnose the collapse; P1 = materially improve core utility/relevance; P2 = supporting improvements; P3 = housekeeping.

## 2. What the Search Console screenshot establishes

The selected view is Web search over three months and reports **17 clicks, 6.38K impressions, 0.3% CTR, and average position 16**. The visible plot covers late August through late October. Impressions rise to roughly 600/day around early/mid-September and fall to almost zero around **15 September**, with small later blips. Exact daily values and percentage losses cannot be recovered reliably from this screenshot.

17 ÷ 6,380 is approximately 0.27%, consistent with the rounded 0.3% shown. Average position 16 is an aggregate across the selected period and query mix. It does not establish the site's current rank or mean every keyword was near position 16. The near-zero impression level matters more than optimizing an aggregate CTR: better snippets cannot recover searches where the site no longer appears.

The property shown is the HTTPS **www URL-prefix property**. A historical shift to non-www, another protocol, or a different host could move reporting outside that property. Today's non-www redirect to www makes a current split less likely, but does not rule out a historical change. Compare a verified Domain property before concluding the entire domain lost all exposure.

Google's [traffic-drop investigation guidance](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops) supports comparing affected pages/queries, technical availability, indexing, seasonality, and ranking changes rather than inferring a cause from chart shape alone.

### The highest-value root-cause investigations

| Priority / hypothesis | Evidence now | How to confirm or reject it | Action if confirmed |
|---|---|---|---|
| P0: deployment, crawling, or indexing incident around 14–16 September | The visibility cliff and nearby repository changes are verified. No current widespread block was found. | Compare 1–14 September with 16–29 September; inspect the previously visible landing pages in GSC. Review Page Indexing, Crawl Stats, indexed/live URL inspection, CDN WAF events, and actual deployment records for 12–18 September. | Repair the specific status, robots, rendering, redirect, or canonical regression. Restore original URLs where appropriate. Request indexing for a few repaired key pages and resubmit the clean sitemap. |
| P0: reporting/canonical/host migration | Screenshot is a www URL-prefix property. Current sampled host redirects consolidate correctly. | Compare Domain/non-www/www properties, Google-selected canonical versus declared canonical, and old landing-page URLs. Check Removals and canonical histories if available. | Consolidate to the intended host with direct permanent redirects, self-canonicals and matching internal/sitemap URLs; use the Domain property for analysis. |
| P0/P1: ranking or relevance reassessment, possibly after initial discovery | Current pages are reachable, but current indexing and lost-query positions are unknown. Content/product quality defects exist. | If old URLs remain indexed with intended canonicals, compare the same query/page/country/device combinations before and after the cliff. Record replacement results and changes in query coverage. | Improve the affected tools and intent fit; prioritize the pages/queries that actually lost impressions. Avoid indiscriminate content expansion. |
| P0 check: manual action, security incident, or accidental removal | No account evidence available; not diagnosed. | Open GSC Manual Actions, Security Issues, and Removals. | Follow the actual reported issue. Reconsideration is relevant only for a confirmed manual action. |
| P2 hypothesis: seasonality, demand or search-result changes | A mathematics site may have school-calendar effects, but the abrupt chart shape is not proof. | Compare affected queries in Google Trends and country segments; compare impressions and positions, not only clicks. | Adjust demand forecasts and develop intent that requires working, explanation, or printable tools rather than bare one-number answers. |

The [official Google ranking-update history](https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history), checked during this audit, lists the September 2026 spam update as beginning **24 September**. That is later than the approximately 15 September cliff shown. It therefore does not explain the onset by timing alone. Smaller/unannounced ranking changes remain possible. There is no evidence here establishing a penalty or an AI-content-related demotion.

### Repository timeline around the drop

- **14 September, `16d8ba5`:** interface, breadcrumbs/footer, metadata/schema output, robots comments, and support-page changes. Importantly, the blanket query-string robots rule already existed before this commit; this commit added explanatory comments, not that blocking rule. Changing one JSON-LD array into separate scripts is not evidence of a deindexing event.
- **14 September, `53c4f16`:** calculator JavaScript and cube/nth-root interface changes.
- **15 September, `dd67126`:** contextual links, support-page changes, and the 404 template.
- **16 September, `f56d07b`:** three additional tools, localized editions, navigation, and custom sitemap endpoints; approximately 14,834 inserted lines. This is after the approximate onset, so it cannot automatically be blamed for starting it. It does warrant examining subsequent crawl/index behavior.

Review the corresponding production deployments, generated artifacts, DNS/CDN rule changes, and Googlebot fetch history. Do not roll back these commits solely because their dates are close to the drop.

## 3. Prioritized issue register

| ID | Finding and status | Severity / potential impact | Effort | Specific remedy and completion check |
|---|---|---|---|---|
| A | Historical visibility loss is still unexplained; screenshot verified, cause unknown | P0, highest recovery value | 0.5–2 days once data is available | Execute the comparisons above; document one primary explanation supported by affected URL/query/indexing evidence. |
| B | Incorrect negative square-root notation in live output: √(-16) = ±4i | P1, high product/content trust impact; contribution to rankings unproven | Small | Return principal root 4i. Explain separately that z² = -16 has solutions ±4i. Update result, explanation, history and quick-calculation paths consistently; verify -1, -16, 0, 2, 72, 144. |
| C | Exact-decimal/arbitrary-precision and methodology promises exceed evidenced implementation | P1, high credibility/intent impact | Small copy fix; larger arithmetic upgrade | Use “decimal approximation and exact simplified radical where supported.” State binary floating-point limitations. Publish reproducible accuracy cases. Verify any Newton-Raphson/10+ decimal-place guarantee against actual implementation and supported input range. |
| D | French product is partially English and French headings are unnatural | P1, high for French relevance and successful use | Medium | Translate dynamic results, errors, tooltips, placeholders, ARIA names, figure captions, and display numbers. Have a native reviewer revise all six French tools. Prioritize other languages by actual GSC demand, then QA them. |
| E | 181 internal links target absent section IDs across 55 pages | P1, medium navigation/UX impact; not HTTP 404s or a demonstrated cause of the cliff | Small shared-template fix | Make ToC and section IDs derive from one source. Repair 126 cube-root, 36 perfect-cube, 18 nth-root, and one contact-page FAQ fragment. Crawl to zero missing fragments. |
| F | Advertised fraction entry is unsupported in the core square-root field | P1, high for users seeking fraction roots | Small copy fix; medium parser work | Field is `type=number`; live-matching JS uses `parseFloat`, without fraction parsing. Either support validated `a/b` in a text input, with zero-denominator and locale handling, or remove direct-entry claims and explain conversion to decimals. |
| G | Mixed keyword/language strategy in English tool titles and branding | P1/P2, potentially high, dependent on lost-query mix | Small editorial work after diagnosis | Use English task names for English pages and native French task names for French pages, keeping the existing URLs and brand. Validate changes with query-level data. Do not migrate domains as a first response. |
| H | Repeated long guides and overlapping tables may blur page ownership | P2, medium; overlap verified, actual cannibalization unproven | Medium | Assign one URL per principal intent per language; summarize secondary topics and link to the owner. Confirm cannibalization through GSC query/page data before merging anything. |
| I | Live schema labels legal/support pages as software applications | P2/P3, low-to-medium semantic quality issue | Small | Emit application markup only on actual tools; use appropriate WebPage/AboutPage/ContactPage and breadcrumb entities elsewhere. Avoid two separate unconnected application identities for one tool. |
| J | Every sitemap URL has the same build-time `lastmod` | P2/P3, low-to-medium crawl signal quality | Small | Replace build time with real per-page significant-change timestamps, or omit unknown values. Resubmit only the preferred sitemap index. |
| K | Blanket query-string crawling block | P2, conditional canonical discovery risk | Small after URL inventory | Inspect query URL patterns. Permit harmless tracking copies to be crawled with clean canonicals, or redirect known redundant parameters safely. Keep targeted blocks only for actual crawl traps. Confirm no functional/query URLs need discovery. |
| L | Inactive contact form | P2, medium trust/support friction | Small | The page explicitly says it is not configured. Remove/disable fields and present a working email contact, or configure submission with validation and test delivery. Do not present a successful submit state without delivery. |
| M | Accessibility failures and a CSP-blocked font | P2, medium usability; ranking loss not established | Small-to-medium | Fix contrast on labels/captions/table filters/footer; use correct tab roles, selected state and keyboard handling, or ordinary buttons where appropriate. Serve the blocked embedded WOFF2 as a same-origin asset so existing CSP can allow it. |
| N | Optimization opportunities despite strong mobile loading | P2/P3, modest immediate SEO value | Medium | PageSpeed flags two render-blocking CSS files and DOM complexity. Trim unused shared CSS and below-fold UI. Profile desktop blocking work before refactoring; preserve the functioning calculator. |
| O | Weak independent authority is plausible, backlink quality/size unknown | P2 strategic hypothesis | Ongoing | Obtain GSC Links and a backlink index export; group by referring domain, inspect best/lost links and destinations, then pursue relevant editorial citations through useful teaching assets. No blind disavow. |
| P | Minor redirect and 404 housekeeping | P3, low | Small | Collapse HTTP non-www → HTTPS non-www → HTTPS www into one hop where possible. Direct `/404` currently returns 200 but has noindex; make its direct status 404 if straightforward. Random unknown URLs already correctly return 404. |

Effort estimates are planning ranges, not delivery promises; “Small” generally means hours to one development day, “Medium” roughly two to five days depending on QA scope.

## 4. On-page and content audit by important page

### Square root: `/` and `/fr/`

Intent: obtain √x immediately, optionally see a simplified exact form and meaningful steps. The English page has about **3,514 main-text tokens** and covers definitions, notation, laws, methods, squares, irrational numbers, fractions/decimals, complex values, tables, applications, and FAQ. Topical breadth is already substantial; lack of word count is not the evident gap.

Verified weaknesses: English title/H1 foreground the French-English brand phrase; the French H1 is “Racine Carrée Calculatrice,” rather than natural task wording. Both pages make exact-decimal promises. The French page still has English input help and all-English generated negative-root output. Its own √(-16) example says 4i while the live calculator returns ±4i.

Actions: make the tool the first useful interaction on mobile; shorten the introductory claim; show one supported worked example directly below the tool; distinguish principal root, equation solutions, exact radicals and decimal approximations. Retain useful teaching material below a reliable ToC. Use “Square Root Calculator” as the English task heading and “Calculatrice de racine carrée” in French. The root page should own general square-root calculation; it can preview charts and perfect-square checking with clear links.

### Cube root: `/racine-cubique-calculator/` and its localized equivalents

Intent: cube roots of positive/negative values, exact/simplified form, decimal approximation. About **3,764 main-text tokens** in English. Good existing coverage includes negative roots, factorization, methods, fractions/decimals, tables and applications.

Verified weaknesses: **seven missing section targets per language**, including `#cbrt-method-calculator`, `#cbrt-method-factorization`, and application subheads. The methods list jumps from 2 to 4 in the captured English headings. “Arbitrary Precision & Step Workings” is not supported by evidence of an arbitrary-precision engine: the live-matching JS calls `Math.cbrt`. English title/H1 again begin with mixed-language wording. Claims of fraction handling need matching supported input behavior.

Actions: repair ToC IDs/numbering, lead with “Cube Root Calculator,” explicitly explain negative real cube roots, add tested ∛(-125), ∛0, ∛0.008, and ∛54 examples, and state numeric limits. Keep full cube tables on the most useful owner page and avoid duplicating general square-root explanations.

### Nth root: `/nth-root-calculator/` and localized equivalents

Intent: a chosen integer root degree, valid real-domain handling, and working. About **1,825 main-text tokens**. The English title already clearly identifies the tool.

Verified weaknesses: missing `#section-nth-recap` in all 18 editions. Copy suggests any index/exact decimal output, while the shared engine requires integer degrees **1–10,000** and uses `Math.pow(x, 1/n)`. Even roots of negatives are rejected, although the square-root widget returns complex outputs; explain this domain difference. Floating-point computation plus an integer-equality check requires edge-case QA before claiming exact classification.

Actions: state accepted degree range, distinguish real-only nth roots from complex square roots, use ≈ when rounded, and add explanatory invalid-input states. Test perfect powers across degrees, zero, negative odd roots, negative even roots, very small/large values and degree bounds. Keep this page focused on variable-index needs instead of competing with the root calculator for every generic square-root term.

### Perfect-square checker: `/perfect-square-calculator/`

Intent: “is N a perfect square?”, base integer, factor evidence and nearest bounding squares. About **1,989 main-text tokens**. This deserves a separate page because the yes/no verification task differs from approximate root calculation.

Actions: prioritize checker, exact decision and bounding integers. Clearly state integer-domain rules; discussion of rational squares should not imply the integer checker accepts fractions. Preserve useful `0`, `1`, `-16`, `50`, and `144` cases. Verify classification beyond JavaScript safe integers or reject unsupported values. The Python integer-square-root example is a useful distinction from generic guides; make limitations of spreadsheet/JavaScript floating-point examples equally clear. Trim general root lessons and international curriculum material unless supported by substantive, cited local relevance. Such material is an editorial concern, not a proven penalty.

### Perfect-cube checker: `/perfect-cube-calculator/`

Intent: check integer cube status, including negatives, explain factors and nearby cubes. About **2,653 main-text tokens**.

Verified weaknesses: two absent section targets per language, `#section-make-cube` and `#section-squares-vs-cubes`. Content offers “exact decimal cube roots,” repeating the precision problem. Large-number exactness and the “Python (Exact Integer Logic)” example need arithmetic review rather than accepting the heading as evidence of correctness.

Actions: center negative/positive integer verification and bounding cubes; give tested 512, 100, -216 and zero cases. Fix the two missing sections or remove their ToC entries. State when mental cube-root shortcuts require an already-known perfect cube and bounded range; do not imply a last-digit shortcut alone proves cube status.

### Chart generator: `/square-root-chart/`

Intent: view/print/copy a root table, choose range and rounding. About **2,721 main-text tokens**. The custom-range generator is a useful differentiator and potentially a stronger linkable asset than another general definition article.

Verified overlap: the homepage already contains a 1–100 reference table; the chart page has its own full table, extended-range content and general root lessons. This creates competing ownership potential, not verified keyword cannibalization. The server-rendered static table is a positive: all useful content is not dependent on interacting with JavaScript.

Actions: make this the table/chart/print owner. Clearly label precision and approximation, put print/copy/export actions beside the result, provide sensible default table content, and test page breaks and mobile horizontal scrolling. A professionally prepared classroom print sheet is a high-value content/link opportunity. Reduce duplicated general calculation sections and link to the main tool for single inputs.

### About, contact, legal pages and HTML sitemap

The About page provides a named creator and methodology, which is useful, but claims Newton-Raphson cross-checking and universal decimal-place accuracy without a reproducible published verification dataset. `Math.sqrt`, `Math.cbrt`, and `Math.pow` calls do not demonstrate a site-specific Newton-Raphson implementation or universal ten-decimal-place guarantee. Publish a truthful methodology, supported ranges, reviewer details if real, correction process, and test cases. Linking to mathematical references is useful; it does not imply their endorsement.

The contact page explicitly discloses the inactive form and also links to nonexistent `/#section-faq`; repair the fragment to the actual FAQ ID and make contact workable. Legal pages need concise accurate disclosures, not added ranking content. The HTML sitemap links every inventoried page, so no sitemap page was orphaned within this crawl, although sitemap/footer discovery is not a substitute for helpful contextual links.

### Titles, descriptions, headings and suggested replacements

All 114 pages have unique titles and descriptions, exactly one H1, and a self-canonical. There is no evidence of a sitewide missing-title or duplicate-meta problem. Five descriptions exceed 160 characters; that alone is not a ranking defect because display truncation depends on rendered width and query. Improve promises and relevance before counting characters.

| Page | Suggested title | Suggested description |
|---|---|---|
| English root | Square Root Calculator — Simplified Radicals & Steps | Calculate square roots with decimal approximations, simplified radicals for supported inputs, and worked steps. Free, with no sign-up. |
| French root | Calculatrice de racine carrée — Résultat et étapes | Calculez une racine carrée, obtenez une approximation décimale et simplifiez les radicaux pris en charge. Gratuit, avec étapes détaillées. |
| English cube | Cube Root Calculator — Negative Numbers & Steps | Find cube roots of positive and negative numbers, with decimal approximations and factor-based simplification for supported inputs. |
| Nth root | Nth Root Calculator — Integer Degrees & Worked Steps | Calculate real nth roots for supported integer degrees. See rounded results, valid negative-number cases and factor-based steps. |
| Perfect square | Perfect Square Checker — Factors & Nearest Squares | Check whether a supported integer is a perfect square. See its root, factorization and the nearest perfect squares. |
| Perfect cube | Perfect Cube Checker — Positive & Negative Integers | Check cube status for supported integers, including negatives. See the base root, factorization and nearest cubes. |
| Chart | Square Root Chart — Printable Tables & Custom Ranges | Build, copy or print a square root table. Choose the range and decimal precision, or display perfect squares only. |

Descriptions must describe the final implemented behavior. These are editorial proposals, not tested CTR winners. Keep established URLs; changing English slugs to French during recovery would add migration risk without proof of benefit. Use native French headings such as “Calculatrice de racine cubique,” “Calculatrice de racine n-ième,” and “Tableau des racines carrées.”

## 5. Technical findings and what already works

| Area | Captured result | Interpretation / fix |
|---|---|---|
| HTTP/indexability | 114/114 sitemap destinations returned 200; none had meta noindex | Positive current access, not proof Google has indexed them. Use GSC for selected canonical, indexing and historical exclusions. |
| Robots | `/robots.txt` returns 200; ordinary Googlebot can crawl clean paths. Cloudflare adds managed crawler rules ahead of site-generated rules | No current broad Googlebot block found. Reconcile duplicate AI-agent policies for operational clarity; training-crawler settings do not establish a Google Search penalty. |
| Query strings | `Disallow: /*?*`; tracking homepage variant returns 200 with clean canonical | Blocking prevents crawling the variant's canonical. It does not reliably prevent the variant appearing as a URL-only result. Review actual parameter demand before changing rules. See Google's [robots limitations](https://developers.google.com/search/docs/crawling-indexing/robots/intro). |
| Sitemap | `/sitemap-index.xml` resolves; `/sitemap.xml` and `/sitemap-0.xml` each return equivalent 114-URL sets | Valid current discovery; duplicate endpoint is harmless but unnecessary maintenance. Keep one authoritative generator/index. |
| Sitemap dates | All 114 `lastmod` values are `2026-10-08T04:59:54.645Z`; source uses `new Date()` | This records build time rather than verified individual content changes. Google recommends accurate significant-change dates; use actual dates or omit. [Sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap). |
| Canonicals/hreflang | All self-canonicals match sitemap URLs; language clusters have 18 locales plus x-default; targets and return references pass inventory checks | Preserve this. Do not canonicalize translations to English. This verifies markup consistency, not Google's acceptance or translation quality. |
| Redirects | HTTPS non-www → HTTPS www is 301. HTTP www → HTTPS www is 301. HTTP non-www needs two hops. Tested no-slash tool → slash is 308; index.html → root is 308 | Main consolidation works. Simplify two hops if easy. Preserve path/query behavior in host-level redirect rules. |
| Localized support routes | Example `/fr/about-us/` permanently redirects to English `/about-us/` | Intentional rather than a missing page. Some HTML-sitemap links still take this redirect. Link directly to final English support URLs or implement real translations when justified. |
| 404 behavior | Random nonexistent URL returns genuine 404. `/404/` redirects to `/404`, whose direct response is 200 and has noindex | Real missing URLs are correctly handled. Direct error-page housekeeping is low priority, not a sitewide soft-404 diagnosis. |
| Broken links | No failed HTTP destinations among 44 additional internal/assets checks; 181 missing fragments across 55 pages | Treat fragment bugs separately from 404 errors. Shared template repair resolves most instances at once. External links and lost historical destinations need further checks. |
| Rendering | Main articles, tables, metadata and links are present in server HTML | Positive for discovery. Calculations still require JS; test functional output and disabled/failed-script messaging. |
| Bot probes | Homepage/French home return 200 and matching bodies under desktop and smartphone Googlebot user-agent strings | No differential user-agent block observed. These are unauthenticated probes from our network, not requests from verified Googlebot IPs; review CDN logs and GSC live tests. |
| Images | Every inventoried `<img>` has alt, width and height | Positive. This is presence validation, not a judgment that every translated alt is good. French rendered page still has an English diagram caption. |
| Structured data | JSON-LD parses across the crawl. Live legal pages also contain WebApplication/SoftwareApplication | Restrict application entities to tools, connect IDs coherently, keep visible/schema claims aligned, and validate actual rich-result eligibility. Syntax validation alone is insufficient. |

SoftwareApplication markup does not guarantee a rich result. The captured markup lacks a rating/review; [Google's software-app requirements](https://developers.google.com/search/docs/appearance/structured-data/software-app) include a rating or review for that presentation. Never manufacture reviews to meet the requirement. [FAQ rich results](https://developers.google.com/search/blog/2023/08/howto-faq-changes) are restricted primarily to authoritative government/health sites, so more FAQ schema is not a credible traffic-recovery strategy for this calculator. Neither redundant schema nor absence of a rich result proves a ranking penalty.

### Page speed, mobile usability and Core Web Vitals

The homepage public [PageSpeed report](https://pagespeed.web.dev/analysis/https-www-racinecarreecalculatorr-com/6aiegrmyf7?form_factor=mobile), captured 28 October at approximately 12:00 Asia/Karachi, produced:

| Lab measure | Mobile, emulated Moto G Power / slow 4G | Desktop |
|---|---:|---:|
| Performance score | 97 | 87 |
| Accessibility | 93 | 93 |
| Best Practices | 92 | 92 |
| Lighthouse SEO | 100 | 100 |
| First Contentful Paint | 2.0 s | 0.4 s |
| Largest Contentful Paint | 2.0 s | 0.5 s |
| Total Blocking Time | 0 ms | 310 ms |
| Cumulative Layout Shift | 0 | 0 |
| Speed Index | 2.8 s | 0.9 s |

These are single lab runs, not sitewide or historical measurements. “100 SEO” covers basic checks, not content authority, rankings, indexing or the historical loss. The desktop blocking-time result deserves profiling, but it is not INP. The report says **No Data** for real-user experience. Therefore a field Core Web Vitals pass or fail cannot be declared. Good field targets at the 75th percentile are LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1; see [web.dev's definitions](https://web.dev/articles/defining-core-web-vitals-thresholds).

The mobile run flags render-blocking CSS with an estimated 1,280 ms opportunity, two long tasks and DOM complexity. This modeled saving is not a promise that eliminating CSS would improve LCP by exactly that amount. The two CSS transfers totaled about 26.7 KiB in that run; the larger stylesheet is about 106.6 KB decoded, while `app.js` is about 41.5 KB decoded. Do not mistake decoded sizes for network transfer sizes. Trim unused and repeated styles, keep critical tool styling small and profile decorative effects before changing them.

Lighthouse identifies contrast failures on the input label, captions, table filters, badges and footer; `role=tablist` groups have buttons without the required tab roles. It also logs a data-URL WOFF2 blocked by `font-src 'self'`. Serve that font as a same-origin file rather than broadly weakening CSP. Preserve security headers; these findings do not mean an unsafe-inline policy is an SEO ranking factor.

Mobile viewport metadata and responsive CSS are present, and the emulated run supplies a mobile baseline. A full usability acceptance check still needs small-width testing of every tool, table horizontal scrolling, decimal-comma entry, long localized strings, Arabic RTL, keyboard focus, screen-reader names, printed tables and large-number input. Do not equate a Lighthouse score with complete mobile accessibility.

## 6. Content quality, gaps and cannibalization

**Verified:** no exact duplicate main-text hashes, titles or descriptions among 114 pages. All English core pages are substantial; support/legal pages being shorter is appropriate. There is no demonstrated sitewide thin-content problem based on length. Mathematical fundamentals do not become outdated just because they lack a recent date. The outdated issue is the mismatch between current promises, implementation and inactive contact functionality.

**Quality concern:** many pages repeat broad definitions, generic applications, international-curriculum material and benefits such as “100% free.” Retain material that helps solve the task; replace generic coverage with audited examples, domain restrictions and actual error handling. This is editorial judgment based on relevance, not a spam-policy finding. Translations are not automatically duplicate/spam content, and an 18-language site does not automatically dilute ranking signals. The problem is expansion without consistently good localized product behavior.

**Cannibalization hypotheses to test:** homepage versus chart for table queries; root versus perfect-square checker for perfect-square queries; cube-root versus perfect-cube checker; nth-root versus root pages for generic root terms. In GSC, filter one query cluster and examine the Pages tab over time. Alternation is harmful only when it replaces a better-fitting page, splits signals or reduces combined results; multiple URLs appearing is not itself proof. Consolidate truly redundant sections and strengthen contextual links. Merge/redirect pages only when the search intent and performance evidence justify it.

**Recommended intent ownership:**

| Search need | Owner | Supporting topic/link |
|---|---|---|
| Square root / calculatrice racine carrée | Homepage in the searcher's language | Radical form, principal-root explanation, supported steps |
| Cube root / racine cubique | Cube-root tool | Negative real cube roots and factored examples |
| Nth/fourth/fifth root | Nth-root tool | Integer degrees and real-domain limitations |
| Is N a perfect square? | Perfect-square checker | Integer proof and bounding squares |
| Is N a perfect cube? | Perfect-cube checker | Negative cubes and bounding cubes |
| Root table, printable chart, custom range | Chart generator | Table precision and classroom print layout |

**Best content/product gaps:** a reliable radical-expression/fraction simplifier; genuinely worked manual extraction steps rather than claims; native French decimal/fraction input; reviewed classroom print assets; reproducible arithmetic tests; a clear correction log. Some topics are already discussed, so build missing functionality or deepen the existing owner rather than creating a page for every synonym. A standalone simplifier or manual-method lesson is justified only when it serves a distinct need supported by query demand. Avoid mass “square root of N” pages that merely reproduce a value already answered in search.

## 7. Competitor analysis

Competitors depend on country, language and query. These are verified relevant public competitors/candidates; no claim is made that they are the exact top four in French Google results for your lost queries. Start the final competitive ranking set from GSC's actual pre-drop queries, then capture France/French and English-market SERPs separately.

| Competitor | Verified strengths | Structure / technical observations | Where this site can compete |
|---|---|---|---|
| [dCode: Racine Carrée](https://www.dcode.fr/racine-carree) | Native French tool labels; exact/approximate choice; configurable precision, expression simplification and manual-extraction options; links to cube roots, expressions, equations and mathematical categories | Page returned 200, one H1, self-canonical, two hreflang links; about 34.6 KB decoded HTML. Ten external-script tags and four stylesheets show that smaller HTML does not mean a proven faster total experience. | Deliver simpler mobile interaction, no account barriers, accurate steps and native fraction/comma support. Match useful capability before expanding prose. |
| [calculracine.com](https://calculracine.com/) | Immediate single-purpose French calculator; explicit fractions, decimal-comma and imaginary-number examples; concise guidance | Returned 200 with self-canonical; about 19.7 KB decoded HTML. No H1 found in this HTTP snapshot, no hreflang, one stylesheet and no external-script tags. Inline JS may still run. | Combine its clarity with verified radical simplification, stronger accuracy evidence and useful teaching assets. Its own precision/offline promises require testing; do not copy them uncritically. |
| [CalculatorSoup](https://www.calculatorsoup.com/calculators/algebra/squareroots.php) | English task-focused title; algebra/category hierarchy, related radical/root tools, references, author attribution and citation information | Returned 200, one H1 and self-canonical; about 52.5 KB decoded HTML, seven external-script tags and one stylesheet. | Offer a cleaner localized experience and better principal-root/equation distinction. The inspected competitor page itself mixes ± notation in examples, so ranking competitors are not automatically correctness standards. |
| [Symbolab](https://www.symbolab.com/solver/square-root-calculator) | Broader expression-solving context, worked examples, navigation to algebra/graphing tools and multilingual coverage | Returned 200, one H1, self-canonical and 14 hreflang links; about 532.8 KB decoded HTML, 11 external-script tags and two stylesheets. | Compete on a narrow task completed quickly and freely; precise supported steps and classroom use are more realistic than matching its entire algebra platform. |

These comparisons establish content/tool and structural differences. They do **not** measure competitors' backlink counts, domain authority, topical authority scores, crawl health across their entire sites, or field CWV. Broader coherent category coverage and independent references are observable authority cues; superiority in backlinks is a hypothesis until measured. Our homepage's 165.2 KB decoded HTML is bigger than three compared pages but smaller than Symbolab's. The site's strong mobile lab result shows why HTML bytes alone should not decide the recovery strategy.

The most credible advantage is **a trustworthy, fast, genuinely localized root-learning tool**, with exact supported radicals, transparent rounding, reproducible examples and printable resources. More language pages and more FAQ blocks alone do not provide that advantage.

## 8. Off-page SEO and backlink audit

Public exact-domain searches found multiple SaaSHub comparison pages mentioning the site, for example [this Calculator.io comparison](https://www.saashub.com/compare-racine-carree-calculatorr-vs-calculator-io). These are multiple pages on **one domain**, not evidence of a diverse referring-domain profile. A mention or outbound Website field is also not proof a link passes ranking value. The sampled results do not establish there are no other links.

The website links to its own Facebook, Pinterest, Behance, LinkedIn and YouTube presences. Owned-profile links and `sameAs` markup help identify an entity when accurate, but do not establish third-party educational endorsement. There is no reliable basis here for a DR/DA number, a backlink total, a “toxic link” diagnosis, a lost-link count, or a claim that backlinks caused the September cliff.

To complete the backlink analysis, export GSC Links and one backlink provider's data for this site and the selected competitors. Preserve source URL, referring domain, target URL, anchor, follow/nofollow/sponsored/UGC attributes, first/last seen, HTTP status, and lost/new flags. Then:

1. Deduplicate at referring-domain level; separate relevant editorial education/math links from owned profiles and directories. Check indexability and context of important source pages manually.
2. Review concentration by destination and anchor, sudden changes around 15 September, and links lost to removed/migrated URLs. Provider “first seen” is not necessarily the actual acquisition date.
3. Repair important inbound targets with exact relevant redirects, not a blanket homepage redirect. Reclaim legitimate broken citations where feasible.
4. Compare competitor referring domains on relevant tool/lesson pages; identify teachers, educational resource directories with real editorial standards, tutoring resources and mathematics publications that cite useful tools.
5. Publish the resources worth citing first: printable charts, accessible classroom demonstrations, transparent numeric accuracy cases. Pursue genuine editorial coverage and accurate listings. Do not buy keyword-anchor packages, automate irrelevant directories, or treat all unattractive links as harmful.

Do not submit a disavow file without evidence of a material unnatural-link problem and an appropriate reason to use it. Link spam, a manual action, negative SEO, or a backlink deficit is not verified by the current data.

## 9. Prioritized recovery and growth plan

### Days 0–3: diagnose and protect the baseline

**SEO lead / site owner:** preserve current GSC exports; compare 1–14 September versus 16–29 September and the latest 28 days. Export Dates, Pages, Queries, Countries, Devices and Search Appearance separately; GSC does not provide every dimension combination in a simple UI export. Check Domain property, Manual Actions, Security Issues, Removals, Page Indexing and Crawl Stats. Inspect the formerly visible pages, English/French homes, representative tool URLs and Google-selected canonicals. Record actual production releases and CDN/DNS changes from 12–18 September. Deliver a short incident diagnosis with evidence for/against each hypothesis.

**Developer:** fix the principal-root bug; reconcile fraction and precision promises; repair shared ToC targets; remove or activate the contact form. These are justified independently of the traffic diagnosis. Save a release log. Acceptance: correct representative outputs, no missing fragment targets, clear supported input formats and no misleading success states.

Avoid broad URL/domain migrations, wholesale content deletion, indiscriminate noindexing of translations, or a large new publishing push while the incident is unresolved. These actions would make attribution harder and may discard existing signals.

### Days 4–14: make the core landing pages reliable

**Editor plus native French reviewer:** improve root/cube task titles, claims and headings; translate all results/errors/help text in English/French priority templates. Keep established URLs and functioning hreflang. Prioritize other languages by evidenced impressions/queries and capacity for maintenance, rather than assuming all 18 are equally valuable.

**Developer:** handle locale decimal input consistently; use a validated parser if fractions are supported; implement safe numeric bounds or exact integer arithmetic where needed. Restrict application schema to tools; fix font delivery and accessibility failures; replace build-time lastmod; remove unnecessary redirected support links. Review parameter handling with GSC/log data before replacing the blanket block.

Acceptance: all six tools complete valid/invalid-input checks, English/French UI and outputs use the selected language, metadata describes actual behavior, intended URLs remain 200/self-canonical and reciprocal hreflang remains valid. Confirm live rendering/metadata after deployment rather than checking source alone.

### Weeks 3–6: focus content and relevance

**SEO/editor:** map lost queries to their correct page owners. Reduce repeated explanations/table ownership where overlap causes confusion. Keep quality content already serving different tasks. Publish a truthful methodology and correction log with test cases. Develop one useful print resource and one deeper worked-method resource only where existing content does not meet the need.

**Developer:** profile the 310 ms desktop TBT and simplify expensive initial work if traces identify a useful fix. Test small screens, keyboard and screen readers, RTL and print views. Add lightweight, privacy-appropriate measurement of calculation success and error categories without recording raw user numbers. Analytics is a measurement aid, not a ranking requirement.

Acceptance: distinct page purposes, good contextual linking, accessible core task completion, truthful claims and stable key templates. Recheck mobile/desktop PSI after material performance changes; do not spend weeks chasing a perfect Lighthouse score while indexing/relevance remains unexplained.

### Weeks 7–12 and onward: build demand and independent authority

**SEO/outreach owner:** finish the measured backlink comparison, reclaim important lost links, and promote reviewed resources to relevant educators/publishers. Develop fraction/radical-expression functionality if demand supports it. Expand a locale only after its product, content and editorial maintenance pass QA.

Acceptance: new relevant independent editorial referring domains and useful referral traffic, recovery of the query/page groups that lost visibility, and growth in successful organic calculator use. Track actual sources and outcomes; raw link count is not the goal. Recovery dates and top positions cannot be guaranteed.

### Weekly scorecard

| Metric | Baseline / interpretation | Success criterion |
|---|---|---|
| Impressions/clicks by priority page, country, device and query cluster | Screenshot totals are 6.38K / 17; daily/segment exports still required | Recovery is sustained in the affected segments, not hidden by a different query mix. Compare equal periods and annotate releases. |
| Index status of priority landing pages | Current 200 response is verified, Google index state unknown | Intended core pages indexed with intended canonicals; exclusions explained, not a target of indexing every legal page. |
| Crawl/server availability | Current fetches healthy; historical logs absent | No unintended crawler blocks, failures or canonical-host drift; verify through GSC and authenticated bot logs. |
| CTR at comparable query/rank/device | Aggregate 0.3% is not a valid universal benchmark | Improved CTR in stable comparable cohorts; do not set a blanket 5–10% target from this data. |
| Product correctness/localization | Negative-root bug and English French outputs verified | Audited cases pass; selected locale covers input guidance, results and errors. |
| Broken section navigation | 181 links across 55 pages | Zero missing section targets after shared-template repair. |
| CWV | Homepage field report has no data; lab values above | Where field data exists, p75 LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1; lab trends used separately. |
| Independent links | Unknown; sampled mentions concentrated on one directory domain | Relevant editorial diversity and working destination URLs, assessed using actual exports. |

## 10. Minimum data needed to prove the historical cause

1. GSC Performance exports for the pre/post periods above, especially Pages and Queries, plus country/device splits and Domain-property comparison.
2. GSC Page Indexing reasons and trend; URL Inspection for previously visible pages showing last crawl, indexed status, declared and Google-selected canonical; sitemap processing status; Crawl Stats host/response trends.
3. Manual Actions, Security Issues and Removals status.
4. Cloudflare production deployment history, redirects/WAF/security changes and available bot/server logs for 12–18 September. Inspect verified Googlebot traffic; a user-agent string alone is not proof of bot identity.
5. GSC Links plus a backlink-provider export, and analytics landing-page trends if analytics existed during the period. Absence of analytics code is not itself an SEO defect.

Until these are available, the defensible conclusion is: **a real visibility cliff is visible; several actionable quality defects are verified; the current site is generally crawlable; and the exact historical cause remains unproven.** Fixing the verified defects is worthwhile, but diagnosis of that cliff must remain the first priority.
