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
    initScrollReveal();
    initSmoothScroll();
    initBackToTop();
});

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
        document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    links.querySelectorAll('.nav-link:not(.dropdown-trigger)').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('open');
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
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

    if (!Number.isInteger(value) || value < 0 && degree % 2 === 0) {
        steps.push({ title: 'Apply the root', math: `${symbol}${formatNum(value)} = ${formatResult(Math.pow(value, 1 / degree))}` });
        return steps;
    }

    const absVal = Math.abs(n);
    const factors = primeFactorize(absVal);
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
            steps.push({ title: 'Decimal value', math: `≈ ${formatResult(Math.pow(value, 1 / degree))}` });
        }
    }

    const result = Math.pow(value, 1 / degree);
    if (Number.isInteger(result)) {
        steps.push({ title: 'Final answer', math: `${symbol}${formatNum(value)} = ${formatResult(result)}` });
        steps.push({ title: 'Verify', math: `${formatResult(result)}^${degree} = ${formatNum(Math.pow(result, degree))}` });
    }
    return steps;
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

    if (isNaN(value)) {
        showError(resultArea, 'Please enter a valid number');
        return;
    }

    if (value < 0) {
        showError(resultArea, 'Cannot calculate square root of a negative number');
        return;
    }

    const result = Math.sqrt(value);
    const isPerfectSquare = Number.isInteger(result);
    const isRational = Number.isFinite(result);
    const resultStr = formatResult(result);
    const decimalPlaces = isPerfectSquare ? 0 : (resultStr.includes('.') ? resultStr.split('.')[1].length : 0);

    showResult(resultArea, {
        formula: `√${formatNum(value)} =`,
        value: resultStr,
        badge: isPerfectSquare ? 'Perfect Square' : 'Approximation',
        breakdown: [
            { label: 'Input', value: formatNum(value) },
            { label: 'Result', value: resultStr },
            { label: 'Squared', value: formatResult(result * result) },
            { label: 'Type', value: isPerfectSquare ? 'Integer' : 'Irrational' },
            { label: 'Parity', value: isPerfectSquare ? (result % 2 === 0 ? 'Even' : 'Odd') : 'N/A' },
            { label: 'Precision', value: isPerfectSquare ? 'Exact' : `${decimalPlaces} decimals` },
        ],
        summary: isPerfectSquare
            ? `${resultStr} × ${resultStr} = ${formatNum(value)} — this is a perfect square`
            : `Full precision: ${result.toFixed(10)} — this is an irrational number`,
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

    if (isNaN(value)) {
        showError(resultArea, 'Please enter a valid number');
        return;
    }

    const result = Math.cbrt(value);
    const isPerfectCube = Number.isInteger(result);
    const resultStr = formatResult(result);
    const isNegative = value < 0;

    showResult(resultArea, {
        formula: `∛${formatNum(value)} =`,
        value: resultStr,
        badge: isPerfectCube ? 'Perfect Cube' : 'Approximation',
        breakdown: [
            { label: 'Input', value: formatNum(value) },
            { label: 'Result', value: resultStr },
            { label: 'Cubed', value: formatResult(result ** 3) },
            { label: 'Type', value: isPerfectCube ? 'Integer' : 'Irrational' },
            { label: 'Sign', value: isNegative ? 'Negative' : (value === 0 ? 'Zero' : 'Positive') },
            { label: 'Domain', value: 'All reals' },
        ],
        summary: isPerfectCube
            ? `${resultStr}³ = ${resultStr} × ${resultStr} × ${resultStr} = ${formatNum(value)} — perfect cube`
            : `Full precision: ${result.toFixed(10)} — irrational number`,
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

    if (isNaN(n) || isNaN(x)) {
        showError(resultArea, 'Please fill in both fields');
        return;
    }

    if (n === 0) {
        showError(resultArea, 'Root degree cannot be zero');
        return;
    }

    if (x < 0 && n % 2 === 0) {
        showError(resultArea, 'Even roots of negative numbers are undefined');
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

    showResult(resultArea, {
        formula: `${nStr}${formatNum(x)} =`,
        value: formatResult(result),
        badge: isExact ? 'Exact' : 'Approximation',
        breakdown: [
            { label: 'Degree', value: formatNum(n) },
            { label: 'Input', value: formatNum(x) },
            { label: 'Raised', value: formatResult(Math.pow(result, n)) },
        ],
        summary: isExact
            ? `${formatResult(result)}^${formatNum(n)} = ${formatNum(x)}`
            : `Decimal approximation: ${result.toFixed(10)}`,
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

function showResult(area, { formula, value, badge, breakdown, summary, steps }) {
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
            <div class="result-answer">${value}</div>
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

    area.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showError(area, message) {
    area.classList.add('error');
    area.classList.remove('has-result');
    area.innerHTML = `
        <div class="result-error">
            <span class="result-error-icon" aria-hidden="true">!</span>
            <span class="result-error-text">${message}</span>
        </div>
    `;

    area.style.animation = 'none';
    void area.offsetWidth;
    area.style.animation = 'shake 0.4s ease-out';
}

function formatNum(n) {
    if (Number.isInteger(n) && Math.abs(n) < 1e15) {
        return n.toLocaleString('en-US');
    }
    return n.toString();
}

function formatResult(n) {
    if (!Number.isFinite(n)) return '∞';
    if (Number.isInteger(n) && Math.abs(n) < 1e15) {
        return n.toLocaleString('en-US');
    }
    // Show up to 10 decimal places, trimming trailing zeros
    const fixed = n.toFixed(10);
    return parseFloat(fixed).toString();
}

function addHistory(type, expression, result) {
    const historyMap = {
        sqrt: 'sqrtHistory',
        cbrt: 'cbrtHistory',
        nth: 'nthHistory',
    };

    const listMap = {
        sqrt: 'sqrtHistoryList',
        cbrt: 'cbrtHistoryList',
        nth: 'nthHistoryList',
    };

    const countMap = {
        sqrt: 'sqrtHistoryCount',
        cbrt: 'cbrtHistoryCount',
        nth: 'nthHistoryCount',
    };

    histories[type].unshift({ expression, result });
    if (histories[type].length > MAX_HISTORY) {
        histories[type].pop();
    }

    const container = document.getElementById(historyMap[type]);
    if (container) container.classList.add('show');

    const countEl = document.getElementById(countMap[type]);
    if (countEl) {
        countEl.textContent = `${histories[type].length}`;
    }

    const list = document.getElementById(listMap[type]);
    if (list) {
        list.innerHTML = histories[type].map((item, i) => `
            <div class="history-item" style="animation-delay: ${i * 50}ms">
                <span class="history-expression">${item.expression}</span>
                <span class="history-result">= ${item.result}</span>
            </div>
        `).join('');
    }
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
