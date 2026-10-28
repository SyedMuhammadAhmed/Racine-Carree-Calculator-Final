from pathlib import Path
import re,json
ROOT=Path(__file__).resolve().parent.parent
def edit(path,fn):
    p=ROOT/path;s=p.read_text(encoding='utf-8');p.write_text(fn(s),encoding='utf-8',newline='\n')
def replace(s,a,b):
    assert a in s, a[:100]
    return s.replace(a,b)

def app(s):
    s="import { parseNumericInput, realRoot, exactIntegerRoot, factorInteger, simplifyRoot } from '../lib/rootMath.js';\nimport { rootCopy } from '../lib/rootCopy.js';\nconst resultLocale = document.documentElement.lang || 'en';\nconst copy = rootCopy(resultLocale);\n\n"+s
    start=s.index('// ============================================\n//  Step-by-step helpers')
    end=s.index('// ============================================\n//  Quick Calculate',start)
    s=s[:start]+'''// Shared calculation path: all entry points use the same validation and arithmetic.
function pulseCalcButton(panel) {
    const button = panel?.querySelector('.btn-calc-primary');
    button?.classList.add('is-calculating');
    if (button) setTimeout(() => button.classList.remove('is-calculating'), 600);
}

function calculateRoot(kind) {
    const ids = { sqrt: ['sqrtInput', 'sqrtResult', 'panelSquareRoot'], cbrt: ['cbrtInput', 'cbrtResult', 'panelCubeRoot'], nth: ['nthValue', 'nthResult', 'panelNthRoot'] };
    const [inputId, resultId, panelId] = ids[kind];
    const input = document.getElementById(inputId);
    const area = document.getElementById(resultId);
    if (!input || !area) return;
    pulseCalcButton(document.getElementById(panelId));
    try {
        const value = parseNumericInput(input.value);
        let degree = kind === 'sqrt' ? 2 : 3;
        if (kind === 'nth') {
            const rawDegree = document.getElementById('nthDegree')?.value.trim() || '';
            if (!/^\\d+$/.test(rawDegree)) throw new Error('degree');
            degree = Number(rawDegree);
            if (degree < 1 || degree > 10000) throw new Error('degree');
        }
        const imaginary = kind === 'sqrt' && value < 0;
        const radicand = imaginary ? Math.abs(value) : value;
        const result = realRoot(radicand, degree);
        const exact = exactIntegerRoot(radicand, degree) !== null;
        const symbol = degree === 2 ? '√' : degree === 3 ? '∛' : `${degree}√`;
        const suffix = imaginary ? 'i' : '';
        const rendered = `${formatResult(result)}${suffix}`;
        const radical = simplifyRoot(radicand, degree, symbol);
        const simplified = radical ? `${radical}${suffix}` : null;
        const factors = factorInteger(radicand);
        const steps = [{ title: copy.setup, math: `${symbol}(${input.value.trim()})` }];
        if (imaginary) steps.push({ title: copy.complex, math: `√(${formatNum(value)}) = i × √(${formatNum(radicand)})` });
        if (factors?.length) steps.push({ title: copy.factors, math: `${formatNum(Math.abs(radicand))} = ${factors.join(' × ')}` });
        if (simplified) steps.push({ title: copy.simplify, math: `${symbol}(${formatNum(value)}) = ${simplified}` });
        steps.push({ title: exact ? copy.root : copy.decimal, math: `${symbol}(${formatNum(value)}) ${exact ? '=' : '≈'} ${rendered}` });
        if (exact) steps.push({ title: copy.verify, math: `(${rendered})^${degree} = ${formatNum(value)}` });
        const notes = [exact ? '' : copy.rounded, factors === null ? copy.factorLimit : '', imaginary ? copy.complexNote : kind === 'sqrt' ? copy.rootNote : ''].filter(Boolean);
        showResult(area, {
            formula: `${symbol}(${formatNum(value)}) ${exact ? '=' : '≈'}`,
            value: rendered,
            badge: imaginary ? 'Imaginary Number' : exact ? 'Exact' : 'Approximation',
            simplifiedRadical: simplified,
            breakdown: [
                { label: copy.input, value: formatNum(value) },
                { label: copy.degree, value: String(degree) },
                { label: copy.precision, value: exact ? copy.exact : copy.approx },
            ],
            summary: notes.join(' '), steps,
        });
        addHistory(kind, `${symbol}(${formatNum(value)})`, rendered);
    } catch (error) {
        const messages = { input: copy.inputError, range: copy.rangeError, zeroDenominator: copy.zeroDenominator, degree: copy.degreeError, realDomain: copy.realDomain };
        showError(area, messages[error.message] || copy.inputError);
    }
}
function calculateSquareRoot() { calculateRoot('sqrt'); }
function calculateCubeRoot() { calculateRoot('cbrt'); }
function calculateNthRoot() { calculateRoot('nth'); }

'''+s[end:]
    s=s.replace("result = Math.cbrt(val);", "result = realRoot(val, 3);")
    s=s.replace("result = -Math.pow(-val, 1 / deg);", "result = realRoot(val, deg);").replace("result = Math.pow(val, 1 / deg);", "result = realRoot(val, deg);")
    s=s.replace("result = Math.sqrt(val);", "result = realRoot(Math.abs(val), 2);")
    s=re.sub(r"resultStr = Number\.isInteger\(result\)\s*\? result\.toLocaleString\('en-US'\)\s*: Number\(result\.toPrecision\(6\)\)\.toString\(\);", 'resultStr = formatResult(result);',s)
    s=s.replace("targetScroll = document.getElementById('sqrtResult');", "if (val < 0) resultStr += 'i';\n                targetScroll = document.getElementById('sqrtResult');")
    s=s.replace('Manual simplification steps</span>', '${escapeHtml(copy.steps)}</span>')
    s=s.replace("const safeBadge = escapeHtml(badge || 'Result');", "const safeBadge = escapeHtml(({ Exact: copy.exact, Approximation: copy.approx, 'Imaginary Number': copy.imaginary })[badge] || copy.result);")
    s=s.replace('                    Result\n', '                    ${escapeHtml(copy.result)}\n')
    s=s.replace('aria-label="Copy result ${safeValue} to clipboard" title="Copy result"','aria-label="${escapeHtml(copy.copy)} ${safeValue}" title="${escapeHtml(copy.copy)}"')
    s=s.replace('<span>Copy</span>', '<span>${escapeHtml(copy.copy)}</span>').replace('Simplified Radical:</span>', '${escapeHtml(copy.simplified)}:</span>')
    a=s.index('function copyResultText(');b=s.index('function renderHistory(',a)
    s=s[:a]+'''async function copyResultText(btn, text) {
    const span = btn.querySelector('span');
    const original = span?.textContent;
    try {
        await navigator.clipboard.writeText(text);
        if (span) span.textContent = copy.copied;
    } catch {
        if (span) span.textContent = copy.copyFailed;
    }
    if (span) setTimeout(() => { span.textContent = original; }, 2000);
}

function formatNum(n) {
    return new Intl.NumberFormat(resultLocale, { maximumSignificantDigits: 17, useGrouping: false }).format(n);
}
function formatResult(n) {
    return new Intl.NumberFormat(resultLocale, { maximumSignificantDigits: 12, useGrouping: false, notation: Math.abs(n) > 0 && Math.abs(n) < 1e-6 ? 'scientific' : 'standard' }).format(n);
}

'''+s[b:]
    # Fix contact API's semantic success handling even if the generic form is reused later.
    s=s.replace("if (!response.ok) throw", "if (!response.ok || result.success !== true) throw")
    # Supplement existing interactions with consistent accessible state and hash navigation.
    s=s.replace('    initQuickCalc();','    initQuickCalc();\n    initAccessibleControls();')
    a=s.index('function initSmoothScroll()');b=s.index('// Shared calculation path',a)
    s=s[:a]+'''function revealFragment(hash) {
    let id;
    try { id = decodeURIComponent(hash.replace(/^#/, '')); } catch { return null; }
    const target = document.getElementById(id);
    if (!target) return null;
    const panel = target.closest('.method-panel');
    if (panel && !panel.classList.contains('active')) {
        const key = panel.id.replace('method-panel-', '');
        document.querySelector(`.method-tab-btn[data-method="${CSS.escape(key)}"]`)?.click();
    }
    return target;
}
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', event => {
            const hash = link.getAttribute('href');
            const target = revealFragment(hash);
            if (!target) return;
            event.preventDefault();
            history.pushState(null, '', hash);
            target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
        });
    });
    if (location.hash) revealFragment(location.hash)?.scrollIntoView({ block: 'start' });
    window.addEventListener('hashchange', () => revealFragment(location.hash)?.scrollIntoView({ block: 'start' }));
}
function initAccessibleControls() {
    document.querySelectorAll('.notation-tabs, .method-tabs-nav, .table-filter-pills').forEach(group => {
        const buttons = group.querySelectorAll('button');
        const update = () => buttons.forEach(button => button.setAttribute('aria-pressed', String(button.classList.contains('active'))));
        update();
        buttons.forEach(button => button.addEventListener('click', update));
    });
}

'''+s[b:]
    return s
edit('src/scripts/app.js',app)

for path,script in [('src/layouts/Layout.astro','../scripts/app.js'),('theme/layouts/BaseLayout.astro','../../src/scripts/app.js')]:
    edit(path,lambda s,script=script:replace(s,'<script src="/app.js" defer></script>',f'<script src="{script}"></script>'))

# One sitemap generator, without fabricated dates or competing plugin output.
edit('astro.config.mjs',lambda s: re.sub(r'  integrations: \[.*?\n  \],\n', '',s,flags=re.S).replace('import sitemap from "@astrojs/sitemap";\n','').replace('    plugins: [tailwindcss()],','    plugins: [tailwindcss()],\n    build: { assetsInlineLimit: 0 },'))
for path in ['src/pages/sitemap-0.xml.ts','src/pages/sitemap-index.xml.ts']:
    edit(path,lambda s:s.replace('  const lastmod = new Date().toISOString();\n','').replace('<lastmod>${lastmod}</lastmod>',''))
(ROOT/'src/pages/sitemap.xml.ts').write_text("// Backward-compatible sitemap URL, generated from the same canonical inventory.\nexport { GET, prerender } from './sitemap-0.xml';\n",encoding='utf-8')

# About links should go directly to the final English page.
for p in (ROOT/'src/components').glob('*.astro'):
    edit(p.relative_to(ROOT),lambda s:s.replace("href={localizedUrl('/about-us/')}",'href="/about-us/"'))

# Restore actual section targets; omit ToC entries for sections that do not exist.
edit('src/components/CubeRootContent.astro',lambda s:s.replace('<h3 class="method-title">{content.s6M1Title}', '<h3 class="method-title" id="cbrt-method-calculator">{content.s6M1Title}').replace('<h3 class="method-title">{content.s6M2Title}', '<h3 class="method-title" id="cbrt-method-factorization">{content.s6M2Title}').replace('<h3 class="method-title">{content.s6M4Title}', '<h3 class="method-title" id="cbrt-method-estimation">{content.s6M4Title.replace(/^4[.]/, "3.")}').replace('<div class="app-card">','<div class="app-card" id={`cbrt-app-${["architecture", "shipping", "physics", "finance"][idx] || idx}`}>'))
edit('src/components/NthRootContent.astro',lambda s:s.replace('<div class="warning-box" style="margin-top: var(--space-xl); background:', '<div class="warning-box" id="section-nth-recap" style="margin-top: var(--space-xl); background:'))
edit('src/components/PerfectCubeContent.astro',lambda s:s.replace('const cubeToc = content.toc;', 'const cubeToc = content.toc.filter(item => !["#section-make-cube", "#section-squares-vs-cubes"].includes(item.href));'))

# Keep one homepage event initialization. Standard buttons remain keyboard accessible.
edit('src/components/ContentSections.astro',lambda s:re.sub(r'<script is:inline>.*?</script>\s*', '',s,count=1,flags=re.S))
for name in ['ContentSections','CubeRootContent','NthRootContent']:
    edit(f'src/components/{name}.astro',lambda s:s.replace('role="tablist"','role="group"').replace(' role="tab"',''))
edit('src/components/Calculator.astro',lambda s:s.replace('role="list"','role="group"').replace('role="listitem"',''))
for p in (ROOT/'src/pages').rglob('*.astro'):
    edit(p.relative_to(ROOT),lambda s:s.replace('role="listitem"','').replace('class="quick-calc-chips" role="list"','class="quick-calc-chips" role="group"').replace('role="list" id="nthChips"','role="group" id="nthChips"'))

# Remove the unused, unconfigured contact form without sending any test email.
edit('src/pages/contact-us.astro',lambda s:s.replace("import ContactForm from '../../theme/components/ContactForm.astro';\n",'').replace('href="/#section-faq"','href="/#section-faqs"').replace('submit the form below or email us directly.','email us directly using the address below.').replace('<ContactForm locale={lang} translations={t} />','<a class="btn-calc-primary" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>'))

# Legal and support pages are not applications. One application entity per tool.
def base_schema(s):
    a=s.index('// JSON-LD WebApplication Schema');b=s.index('// JSON-LD FAQPage Schema',a)
    s=s[:a]+'''const pageSchema = !isAboutPage && !isContactPage ? {
  "@context": "https://schema.org", "@type": "WebPage",
  "@id": `${canonicalUrl}#webpage`, name: title, description,
  url: canonicalUrl, inLanguage: activeLocale,
} : null;

'''+s[b:]
    return s.replace('webAppSchema, softwareAppSchema, ', 'pageSchema, ')
edit('theme/layouts/BaseLayout.astro',base_schema)
def tool_schema(s):
    a=s.index('// JSON-LD SoftwareApplication Schema');b=s.index('// JSON-LD WebSite Schema',a)
    return (s[:a]+s[b:]).replace('webAppSchema, softwareAppSchema,','webAppSchema,')
edit('src/layouts/Layout.astro',tool_schema)

# Contrast improvements for text on both theme surfaces.
edit('src/styles/global.css',lambda s:s.replace('--text-muted: #8e8ea0;', '--text-muted: #626277;')+'''
/* Readable supporting text and controls in both themes. */
.input-label, .toc-count-badge, .section-image figcaption,
.irrational-badge, .neg-expr, .neg-val, .tbl-filter-pill,
.footer-redesign__copyright { color: var(--text-secondary); }
.tbl-filter-pill.active { color: var(--text-on-primary); background: var(--primary-600); }
[data-theme="dark"] .tbl-filter-pill.active { color: #fff; background: #6d28d9; }
:where(button, a, input, select, summary):focus-visible { outline: 3px solid var(--primary-500); outline-offset: 4px; }
[id] { scroll-margin-top: 96px; }
''')

# Integer-checking widgets must not claim exactness after Number has lost precision.
for name in ['PerfectSquareWidget','PerfectCubeWidget']:
    def widget(s):
        s=s.replace('!Number.isFinite(n) || !Number.isInteger(n)', '!Number.isSafeInteger(n)')
        s=s.replace("showError('Please enter a valid whole number (integer)');", "showError(document.documentElement.lang === 'fr' ? 'Saisissez un entier compris entre −1 000 000 000 000 et 1 000 000 000 000.' : 'Enter a whole number from −1,000,000,000,000 to 1,000,000,000,000.');")
        s=s.replace('if (!Number.isSafeInteger(n)) {','if (!Number.isSafeInteger(n) || Math.abs(n) > 1e12) {')
        s=s.replace("showError('Please enter an integer to check');", "showError(document.documentElement.lang === 'fr' ? 'Saisissez un entier à vérifier.' : 'Please enter an integer to check');")
        s=s.replace('±${rootAbsStr}i','${rootAbsStr}i')
        return s
    edit(f'src/components/{name}.astro',widget)

print('Applied structural, arithmetic, navigation, schema and accessibility fixes.')
