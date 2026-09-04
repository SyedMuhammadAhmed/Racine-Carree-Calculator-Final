/* ============================================
   Racine Carrée Calculator — Application Logic
   ============================================ */

// ---- State ----
const histories = {
    sqrt: [],
    cbrt: [],
    nth: [],
};
const MAX_HISTORY = 8;

// ---- DOM Ready ----
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavbar();
    initDropdowns();
    initKeyboardShortcuts();
    initCalculatorButtons();
    initLanguagePickers();
    initContactForm();
    initScrollReveal();
    initSmoothScroll();
    initBackToTop();
    initHistory();
});

function initCalculatorButtons() {
    const calculators = [
        ['sqrtCalcBtn', calculateSquareRoot],
        ['cbrtCalcBtn', calculateCubeRoot],
        ['nthCalcBtn', calculateNthRoot],
    ];

    calculators.forEach(([id, calculate]) => {
        document.getElementById(id)?.addEventListener('click', calculate);
    });
}

function initLanguagePickers() {
    document.querySelectorAll('[data-language-select]').forEach(select => {
        select.addEventListener('change', () => {
            if (select.value) window.location.assign(select.value);
        });
    });
}

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const statusDiv = document.getElementById('form-status');
    const statusMsg = document.getElementById('status-message');
    const submitBtn = document.getElementById('submit-btn');
    const web3FormsKey = form.dataset.web3formsKey || '';
    if (!statusDiv || !statusMsg || !submitBtn) return;

    const setStatus = (status, message) => {
        statusDiv.className = `form-status ${status}`;
        statusMsg.textContent = message;
    };

    form.addEventListener('submit', async event => {
        event.preventDefault();
        setStatus('status-info', form.dataset.msgSending || 'Sending message...');
        submitBtn.disabled = true;

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    access_key: web3FormsKey,
                    ...Object.fromEntries(new FormData(form).entries()),
                }),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message || form.dataset.msgError);

            setStatus('status-success', form.dataset.msgSuccess || 'Your message has been sent successfully.');
            form.reset();
        } catch (error) {
            setStatus('status-error', error.message || form.dataset.msgNetworkError || 'Network error. Please try again.');
        } finally {
            submitBtn.disabled = false;
        }
    });
}

function initHistory() {
    ['sqrt', 'cbrt', 'nth'].forEach(type => {
        try {
            const saved = localStorage.getItem(`calc_history_${type}`);
            if (saved) {
                const parsed = JSON.parse(saved);
                histories[type] = Array.isArray(parsed) ? parsed.slice(0, MAX_HISTORY) : [];
                if (histories[type].length > 0) {
                    renderHistory(type);
                }
            }
        } catch (e) {}
    });
}

// ---- Theme ----
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (toggle) {
            const isDark = theme === 'dark';
            toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
            toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
            toggle.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
        }
    }

    const stored = localStorage.getItem('theme');
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    applyTheme(stored || preferred);

    toggle?.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// ---- Navbar ----
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    if (!navbar || !toggle || !links) return;

    // Scroll effect
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    // Mobile toggle
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(links.classList.contains('open')));
        document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    links.querySelectorAll('.nav-link:not(.dropdown-trigger)').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 150;
            if (window.scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === current);
        });
    }, { passive: true });
}

// ---- Dropdown Menus ----
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');

    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        const menu = dropdown.querySelector('.dropdown-menu');
        if (!trigger || !menu) return;

        // Toggle on click
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = dropdown.classList.contains('open');
            // Close all dropdowns first
            document.querySelectorAll('.nav-dropdown.open').forEach(d => {
                d.classList.remove('open');
                d.querySelector('.dropdown-trigger')?.setAttribute('aria-expanded', 'false');
            });
            if (!isOpen) {
                dropdown.classList.add('open');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });

        // Hover on desktop
        dropdown.addEventListener('mouseenter', () => {
            if (window.innerWidth >= 768) {
                dropdown.classList.add('open');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });

        dropdown.addEventListener('mouseleave', () => {
            if (window.innerWidth >= 768) {
                dropdown.classList.remove('open');
                trigger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', () => {
        document.querySelectorAll('.nav-dropdown.open').forEach(d => {
            d.classList.remove('open');
            d.querySelector('.dropdown-trigger')?.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;
        document.querySelectorAll('.nav-dropdown.open').forEach(dropdown => {
            dropdown.classList.remove('open');
            dropdown.querySelector('.dropdown-trigger')?.setAttribute('aria-expanded', 'false');
        });
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinks');
        if (navLinks?.classList.contains('open')) {
            navToggle?.classList.remove('active');
            navLinks.classList.remove('open');
            navToggle?.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            navToggle?.focus();
        }
    });
}

// ---- Keyboard Shortcuts ----
function initKeyboardShortcuts() {
    document.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            // Determine which calculator is on the current page
            const sqrtInput = document.getElementById('sqrtInput');
            const cbrtInput = document.getElementById('cbrtInput');
            const nthDegree = document.getElementById('nthDegree');
            const nthValue = document.getElementById('nthValue');

            if (sqrtInput && document.activeElement === sqrtInput) {
                calculateSquareRoot();
            } else if (cbrtInput && document.activeElement === cbrtInput) {
                calculateCubeRoot();
            } else if (nthDegree && (document.activeElement === nthDegree || document.activeElement === nthValue)) {
                calculateNthRoot();
            }
        }
    });
}

// ---- Scroll Reveal ----
function initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.example-card, .step-content, .law-card, .app-card, .tip-card, .article-h2, .article-h3').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// ---- Smooth Scroll ----
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
//  Step-by-step helpers
// ============================================

function primeFactorize(n) {
    n = Math.round(Math.abs(n));
    if (n <= 1) return n === 0 ? [] : [n];
    if (n > 1e12) return null; // Do not pretend an unfactored value is prime.
    const factors = [];
    let d = 2;
    while (d * d <= n) {
        while (n % d === 0) {
            factors.push(d);
            n /= d;
        }
        d++;
    }
    if (n > 1) factors.push(n);
    return factors;
}

function gcd(a, b) {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));
    while (b) {
        [a, b] = [b, a % b];
    }
    return a || 1;
}

function buildRootFactorSteps(value, degree, symbol) {
    const steps = [];
    const n = Math.round(value);
    steps.push({ title: 'Set up the problem', math: `Find ${symbol}${formatNum(value)}` });

    if (value === 0) {
        steps.push({ title: 'Zero property', math: `${symbol}0 = 0` });
        return steps;
    }

    if (!Number.isInteger(value) || (value < 0 && degree % 2 === 0)) {
        const absVal = Math.abs(value);
        const powVal = Math.pow(absVal, 1 / degree);
        const resVal = value < 0 && degree % 2 === 1 ? -powVal : powVal;
        steps.push({ title: 'Apply the root', math: `${symbol}${formatNum(value)} = ${formatResult(resVal)}` });
        return steps;
    }

    const absVal = Math.abs(n);
    const factors = primeFactorize(absVal);
    if (factors === null) {
        steps.push({
            title: 'Simplification unavailable for this large integer',
            math: 'To avoid an inaccurate or slow factorization, this calculator shows a decimal approximation only.'
        });
        return steps;
    }
    if (factors.length) {
        steps.push({ title: 'Prime factorization', math: `${formatNum(absVal)} = ${factors.join(' × ')}` });

        const counts = {};
        factors.forEach(f => { counts[f] = (counts[f] || 0) + 1; });

        const outside = [];
        const inside = [];
        const groupParts = [];

        Object.keys(counts).map(Number).sort((a, b) => a - b).forEach(prime => {
            const count = counts[prime];
            const groups = Math.floor(count / degree);
            const remainder = count % degree;
            if (groups > 0) {
                outside.push(Math.pow(prime, groups));
                groupParts.push(`${prime}${groups > 1 ? `^${groups}` : ''} outside`);
            }
            if (remainder > 0) {
                inside.push(Math.pow(prime, remainder));
            }
        });

        const outsideProduct = outside.reduce((a, b) => a * b, 1) || 1;
        const insideProduct = inside.reduce((a, b) => a * b, 1) || 1;
        const sign = value < 0 && degree % 2 === 1 ? '−' : '';

        if (inside.length === 0) {
            steps.push({ title: `Group factors in sets of ${degree}`, math: `Every prime factor divides evenly — all come outside the radical` });
            steps.push({ title: 'Multiply outside values', math: `${sign}${outside.map(formatNum).join(' × ')} = ${sign}${formatNum(outsideProduct)}` });
        } else {
            steps.push({ title: `Group factors in sets of ${degree}`, math: `Take complete groups outside; leftover stays inside` });
            steps.push({ title: 'Simplify the radical', math: `${symbol}${formatNum(absVal)} = ${sign}${formatNum(outsideProduct)}${symbol}${formatNum(insideProduct)}` });
            const absDec = Math.pow(absVal, 1 / degree);
            const realDec = value < 0 && degree % 2 === 1 ? -absDec : absDec;
            steps.push({ title: 'Decimal value', math: `≈ ${formatResult(realDec)}` });
        }
    }

    const absRes = Math.pow(absVal, 1 / degree);
    const result = value < 0 && degree % 2 === 1 ? -absRes : absRes;
    if (Number.isInteger(result)) {
        steps.push({ title: 'Final answer', math: `${symbol}${formatNum(value)} = ${formatResult(result)}` });
        steps.push({ title: 'Verify', math: `${formatResult(result)}^${degree} = ${formatNum(Math.pow(result, degree))}` });
    }
    return steps;
}

// Helper to get simplified radical representation (e.g. 6√2 for 72)
function getSimplifiedRadical(value, degree, symbol) {
    if (!Number.isFinite(value) || value === 0) return null;
    const absVal = Math.round(Math.abs(value));
    if (absVal > 1e12 || !Number.isInteger(absVal)) return null;
    const factors = primeFactorize(absVal);
    if (!factors || !factors.length) return null;

    const counts = {};
    factors.forEach(f => { counts[f] = (counts[f] || 0) + 1; });

    const outside = [];
    const inside = [];

    Object.keys(counts).map(Number).sort((a, b) => a - b).forEach(prime => {
        const count = counts[prime];
        const groups = Math.floor(count / degree);
        const remainder = count % degree;
        if (groups > 0) outside.push(Math.pow(prime, groups));
        if (remainder > 0) inside.push(Math.pow(prime, remainder));
    });

    const outsideProduct = outside.reduce((a, b) => a * b, 1) || 1;
    const insideProduct = inside.reduce((a, b) => a * b, 1) || 1;
    const sign = value < 0 && degree % 2 === 1 ? '−' : '';

    if (inside.length === 0) {
        // Integer perfect root, no radical needed
        return null;
    }
    if (outsideProduct > 1) {
        return `${sign}${formatNum(outsideProduct)}${symbol}${formatNum(insideProduct)}`;
    }
    return null;
}

// ============================================
//  Calculator Functions
// ============================================

function pulseCalcButton(panel) {
    const btn = panel?.querySelector('.btn-calc-primary');
    if (btn) {
        btn.classList.add('is-calculating');
        setTimeout(() => btn.classList.remove('is-calculating'), 600);
    }
}

// ---- Square Root ----
function calculateSquareRoot() {
    const input = document.getElementById('sqrtInput');
    const resultArea = document.getElementById('sqrtResult');
    const panel = document.getElementById('panelSquareRoot');
    pulseCalcButton(panel);
    const value = parseFloat(input.value);

    if (!Number.isFinite(value)) {
        showError(resultArea, 'Please enter a valid number');
        return;
    }

    // Negative Square Root: Return Imaginary Unit (i) result
    if (value < 0) {
        const absVal = Math.abs(value);
        const rootAbs = Math.sqrt(absVal);
        const isPerfect = Number.isInteger(rootAbs);
        const absStr = formatResult(rootAbs);
        const simplified = getSimplifiedRadical(absVal, 2, '√');
        const imaginaryVal = `±${absStr}i`;
        const simplifiedImaginary = simplified ? `±${simplified}i` : null;

        showResult(resultArea, {
            formula: `√(${formatNum(value)}) =`,
            value: imaginaryVal,
            badge: 'Imaginary Number',
            simplifiedRadical: simplifiedImaginary,
            breakdown: [
                { label: 'Input', value: formatNum(value) },
                { label: 'Imaginary Result', value: imaginaryVal },
                ...(simplifiedImaginary ? [{ label: 'Simplified Radical', value: simplifiedImaginary }] : []),
                { label: 'Real Part', value: '0' },
                { label: 'Imaginary Part', value: `±${absStr}` },
                { label: 'Type', value: 'Complex / Imaginary unit (i = √-1)' },
                { label: 'Note', value: 'No real number solution exists' }
            ],
            summary: `In real numbers, negative numbers have no square root. In complex numbers, √(${formatNum(value)}) = √(${formatNum(absVal)}) × √(-1) = ${imaginaryVal}.`,
            steps: [
                { title: 'Recognize negative radicand', math: `√(${formatNum(value)}) = √(${formatNum(absVal)} × -1)` },
                { title: 'Apply the product rule', math: `= √(${formatNum(absVal)}) × √(-1)` },
                { title: 'Substitute the imaginary unit i', math: `Since i = √(-1), this becomes √(${formatNum(absVal)}) · i` },
                { title: 'Calculate the square root of the magnitude', math: `√(${formatNum(absVal)}) = ${absStr}` },
                { title: 'Final complex result', math: `√(${formatNum(value)}) = ±${absStr}i` }
            ]
        });

        addHistory('sqrt', `√(${formatNum(value)})`, imaginaryVal);
        return;
    }

    const result = Math.sqrt(value);
    const isPerfectSquare = Number.isInteger(result);
    const resultStr = formatResult(result);
    const simplifiedRadical = isPerfectSquare ? null : getSimplifiedRadical(value, 2, '√');

    showResult(resultArea, {
        formula: `√${formatNum(value)} =`,
        value: resultStr,
        badge: isPerfectSquare ? 'Perfect Square' : (simplifiedRadical ? 'Simplified' : 'Approximation'),
        simplifiedRadical: simplifiedRadical,
        breakdown: [
            { label: 'Input', value: formatNum(value) },
            { label: 'Result', value: resultStr },
            ...(simplifiedRadical ? [{ label: 'Simplified Radical', value: simplifiedRadical }] : []),
            { label: 'Squared', value: formatResult(result * result) },
            { label: 'Type', value: isPerfectSquare ? 'Integer' : 'Decimal approximation' },
            { label: 'Parity', value: isPerfectSquare ? (result % 2 === 0 ? 'Even' : 'Odd') : 'N/A' },
            { label: 'Precision', value: isPerfectSquare ? 'Exact integer result' : 'Rounded display' },
        ],
        summary: isPerfectSquare
            ? `${resultStr} × ${resultStr} = ${formatNum(value)} — this is a perfect square`
            : (simplifiedRadical
                ? `Exact simplified form is ${simplifiedRadical} ≈ ${resultStr}`
                : `Displayed to up to 12 significant digits. Verify high-stakes calculations independently.`),
        steps: buildRootFactorSteps(value, 2, '√'),
    });

    addHistory('sqrt', `√${formatNum(value)}`, resultStr);
}

// ---- Cube Root ----
function calculateCubeRoot() {
    const input = document.getElementById('cbrtInput');
    const resultArea = document.getElementById('cbrtResult');
    pulseCalcButton(document.getElementById('panelCubeRoot'));
    const value = parseFloat(input.value);

    if (!Number.isFinite(value)) {
        showError(resultArea, 'Please enter a valid number');
        return;
    }

    const result = Math.cbrt(value);
    const isPerfectCube = Number.isInteger(result);
    const resultStr = formatResult(result);
    const isNegative = value < 0;
    const simplifiedRadical = isPerfectCube ? null : getSimplifiedRadical(value, 3, '∛');

    showResult(resultArea, {
        formula: `∛${formatNum(value)} =`,
        value: resultStr,
        badge: isPerfectCube ? 'Perfect Cube' : (simplifiedRadical ? 'Simplified' : 'Approximation'),
        simplifiedRadical: simplifiedRadical,
        breakdown: [
            { label: 'Input', value: formatNum(value) },
            { label: 'Result', value: resultStr },
            ...(simplifiedRadical ? [{ label: 'Simplified Radical', value: simplifiedRadical }] : []),
            { label: 'Cubed', value: formatResult(result ** 3) },
            { label: 'Type', value: isPerfectCube ? 'Integer' : 'Decimal approximation' },
            { label: 'Sign', value: isNegative ? 'Negative' : (value === 0 ? 'Zero' : 'Positive') },
            { label: 'Domain', value: 'All reals' },
        ],
        summary: isPerfectCube
            ? `${resultStr}³ = ${resultStr} × ${resultStr} × ${resultStr} = ${formatNum(value)} — perfect cube`
            : (simplifiedRadical
                ? `Exact simplified form is ${simplifiedRadical} ≈ ${resultStr}`
                : `Displayed to up to 12 significant digits. Verify high-stakes calculations independently.`),
        steps: buildRootFactorSteps(value, 3, '∛'),
    });

    addHistory('cbrt', `∛${formatNum(value)}`, resultStr);
}

// ---- Nth Root ----
function calculateNthRoot() {
    const degreeInput = document.getElementById('nthDegree');
    const valueInput = document.getElementById('nthValue');
    const resultArea = document.getElementById('nthResult');
    pulseCalcButton(document.getElementById('panelNthRoot'));
    const n = parseFloat(degreeInput.value);
    const x = parseFloat(valueInput.value);

    if (!Number.isFinite(n) || !Number.isFinite(x)) {
        showError(resultArea, 'Please fill in both fields');
        return;
    }

    if (!Number.isInteger(n) || n < 1 || n > 10000) {
        showError(resultArea, 'Root degree must be a whole number from 1 to 10,000');
        return;
    }

    if (x < 0 && n % 2 === 0) {
        showError(resultArea, 'Even roots of negative numbers have no real solution');
        return;
    }

    let result;
    if (x < 0) {
        result = -Math.pow(-x, 1 / n);
    } else {
        result = Math.pow(x, 1 / n);
    }

    const isExact = Number.isInteger(result);
    const nStr = n === 2 ? '√' : n === 3 ? '∛' : `${formatNum(n)}√`;
    const simplifiedRadical = isExact ? null : getSimplifiedRadical(x, n, nStr);

    showResult(resultArea, {
        formula: `${nStr}${formatNum(x)} =`,
        value: formatResult(result),
        badge: isExact ? 'Exact' : (simplifiedRadical ? 'Simplified' : 'Approximation'),
        simplifiedRadical: simplifiedRadical,
        breakdown: [
            { label: 'Degree', value: formatNum(n) },
            { label: 'Input', value: formatNum(x) },
            { label: 'Result', value: formatResult(result) },
            ...(simplifiedRadical ? [{ label: 'Simplified Radical', value: simplifiedRadical }] : []),
            { label: 'Raised', value: formatResult(Math.pow(result, n)) },
        ],
        summary: isExact
            ? `${formatResult(result)}^${formatNum(n)} = ${formatNum(x)}`
            : (simplifiedRadical
                ? `Exact simplified form is ${simplifiedRadical} ≈ ${formatResult(result)}`
                : `Displayed to up to 12 significant digits. Verify high-stakes calculations independently.`),
        steps: (() => {
            const sym = n === 2 ? '√' : n === 3 ? '∛' : `${formatNum(n)}√`;
            const steps = buildRootFactorSteps(x, n, sym);
            if (n !== 2 && n !== 3) {
                steps.splice(1, 0, { title: 'Rewrite as exponent', math: `${sym}${formatNum(x)} = ${formatNum(x)}^(1/${formatNum(n)})` });
            }
            return steps;
        })(),
    });

    addHistory('nth', `${nStr}${formatNum(x)}`, formatResult(result));
}

// ============================================
//  UI Helpers
// ============================================

const STEPS_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`;

function showResult(area, { formula, value, badge, breakdown, summary, steps, simplifiedRadical }) {
    area.classList.add('has-result');
    area.classList.remove('error');

    const statusClass = {
        'Perfect Square': 'is-exact',
        'Perfect Cube': 'is-exact',
        'Exact': 'is-exact',
        'Simplified': 'is-exact',
        'Result': 'is-exact',
        'Ratio': 'is-info',
        'Increase': 'is-info',
        'Decrease': 'is-decrease',
        'Imaginary Number': 'is-info',
        'Approximation': 'is-approx',
        'Undefined': 'is-approx',
    }[badge] || 'is-approx';

    const breakdownHtml = (breakdown || []).map(item => `
        <div class="result-stat">
            <span class="result-stat-label">${item.label}</span>
            <span class="result-stat-value">${item.value}</span>
        </div>
    `).join('');

    const CHEVRON_SVG = `<svg class="steps-chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

    const stepsHtml = (steps || []).length ? `
        <details class="result-steps">
            <summary class="result-steps-header">
                <span style="display:flex;align-items:center;gap:8px">${STEPS_SVG} Manual simplification steps</span>
                ${CHEVRON_SVG}
            </summary>
            <ol class="result-steps-list">
                ${steps.map((s, i) => `
                    <li class="result-step" style="--step-i: ${i}">
                        <span class="result-step-num">${i + 1}</span>
                        <div class="result-step-body">
                            <span class="result-step-title">${s.title}</span>
                            <span class="result-step-math">${s.math}</span>
                        </div>
                    </li>
                `).join('')}
            </ol>
        </details>
    ` : '';

    area.innerHTML = `
        <div class="result-filled">
            <div class="result-panel-header">
                <span class="result-panel-label">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    Result
                </span>
                <span class="result-status ${statusClass}">${badge || 'Result'}</span>
            </div>
            <div class="result-expression">${formula}</div>
            <div class="result-answer" style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;">
                <span>${value}</span>
                <button type="button" class="btn-copy-result" aria-label="Copy result to clipboard" title="Copy result" style="background:var(--bg-glass-strong);border:1px solid var(--border-default);border-radius:6px;padding:4px 8px;font-size:0.75rem;font-weight:600;color:var(--text-secondary);cursor:pointer;display:inline-flex;align-items:center;gap:4px;transition:all 0.2s;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    <span>Copy</span>
                </button>
            </div>
            ${simplifiedRadical ? `
                <div class="result-simplified-banner" style="margin: 8px auto 14px; padding: 6px 14px; background: rgba(124, 58, 237, 0.12); border: 1px solid rgba(124, 58, 237, 0.35); border-radius: 8px; font-size: 0.95rem; display: inline-flex; align-items: center; justify-content: center; gap: 8px; width: fit-content; max-width: 100%;">
                    <span style="color: var(--primary-400); font-weight: 600;">Simplified Radical:</span>
                    <strong style="font-family: var(--font-mono, monospace); font-size: 1.05rem; color: var(--text-primary);">${simplifiedRadical}</strong>
                </div>
            ` : ''}
            ${breakdownHtml ? `<div class="result-breakdown">${breakdownHtml}</div>` : ''}
            ${summary ? `
                <div class="result-summary">
                    <span class="result-summary-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </span>
                    <span>${summary}</span>
                </div>
            ` : ''}
            ${stepsHtml}
        </div>
    `;

    area.querySelector('.btn-copy-result')?.addEventListener('click', event => {
        copyResultText(event.currentTarget, value);
    });

    area.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showError(area, message) {
    if (!area) return;
    area.classList.add('has-result', 'error');

    const wrapper = document.createElement('div');
    wrapper.className = 'result-error';
    const icon = document.createElement('span');
    icon.className = 'result-error-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '!';
    const detail = document.createElement('p');
    detail.className = 'result-error-text';
    detail.textContent = message;
    wrapper.append(icon, detail);
    area.replaceChildren(wrapper);
    area.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function copyResultText(btn, text) {
    if (!navigator.clipboard) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    } else {
        navigator.clipboard.writeText(text);
    }
    const span = btn.querySelector('span');
    if (span) {
        const orig = span.textContent;
        span.textContent = 'Copied!';
        setTimeout(() => { span.textContent = orig; }, 2000);
    }
}

function formatNum(n) {
    if (Number.isInteger(n) && Math.abs(n) < 1e15) {
        return n.toLocaleString('en-US');
    }
    return n.toString();
}

function formatResult(n) {
    if (!Number.isFinite(n)) return 'Not a finite result';
    if (Number.isInteger(n) && Math.abs(n) < 1e15) {
        return n.toLocaleString('en-US');
    }
    // Significant digits preserve meaningful very small values without claiming exactness.
    return Number(n.toPrecision(12)).toString();
}

function renderHistory(type) {
    const historyMap = { sqrt: 'sqrtHistory', cbrt: 'cbrtHistory', nth: 'nthHistory' };
    const listMap = { sqrt: 'sqrtHistoryList', cbrt: 'cbrtHistoryList', nth: 'nthHistoryList' };
    const countMap = { sqrt: 'sqrtHistoryCount', cbrt: 'cbrtHistoryCount', nth: 'nthHistoryCount' };

    const container = document.getElementById(historyMap[type]);
    if (container) container.classList.add('show');

    const countEl = document.getElementById(countMap[type]);
    if (countEl) countEl.textContent = `${histories[type].length}`;

    const list = document.getElementById(listMap[type]);
    if (list) {
        const entries = histories[type]
            .filter(item => item && typeof item.expression === 'string' && typeof item.result === 'string')
            .map((item, i) => {
                const entry = document.createElement('div');
                entry.className = 'history-item';
                entry.style.animationDelay = `${i * 50}ms`;
                const expression = document.createElement('span');
                expression.className = 'history-expression';
                expression.textContent = item.expression;
                const result = document.createElement('span');
                result.className = 'history-result';
                result.textContent = `= ${item.result}`;
                entry.append(expression, result);
                return entry;
            });
        list.replaceChildren(...entries);
    }
}

function addHistory(type, expression, result) {
    histories[type].unshift({ expression, result });
    if (histories[type].length > MAX_HISTORY) {
        histories[type].pop();
    }

    try {
        localStorage.setItem(`calc_history_${type}`, JSON.stringify(histories[type]));
    } catch (e) {}

    renderHistory(type);
}

// Add shake keyframe dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(-6px); }
        40% { transform: translateX(6px); }
        60% { transform: translateX(-4px); }
        80% { transform: translateX(4px); }
    }
`;
document.head.appendChild(style);

// ---- Mouse glow effect on feature cards (optimized with rAF & delegation) ----
let mouseMoveTicking = false;
document.addEventListener('mousemove', e => {
    if (!mouseMoveTicking) {
        window.requestAnimationFrame(() => {
            const card = e.target.closest ? e.target.closest('.app-card, .example-card, .law-card, .step-content, .tip-card') : null;
            if (card) {
                const rect = card.getBoundingClientRect();
                if (rect.height > 0) {
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    card.style.setProperty('--mouse-y', `${y}%`);
                }
            }
            mouseMoveTicking = false;
        });
        mouseMoveTicking = true;
    }
}, { passive: true });

// ---- Back to Top ----
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
