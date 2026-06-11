/* ============================================
   Racine Carrée Calculator — Application Logic
   ============================================ */

// ---- State ----
const histories = {
    sqrt: [],
    cbrt: [],
    nth: [],
    frac: [],
    power: [],
    pct: [],
};
const MAX_HISTORY = 8;
let currentPctMode = 'of';
let currentFracOp = '+';

// ---- DOM Ready ----
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initTabs();
    initFractionOperator();
    initPercentageTabs();
    initKeyboardShortcuts();
    initScrollReveal();
    initSmoothScroll();
});

// ---- Navbar ----
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

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
    links.querySelectorAll('.nav-link').forEach(link => {
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

// ---- Calculator Tabs ----
function initTabs() {
    const tabs = document.querySelectorAll('.calc-tab');
    const panels = document.querySelectorAll('.calc-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.calc;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            panels.forEach(p => {
                if (p.dataset.calc === target) {
                    p.classList.add('active');
                    p.style.animation = 'none';
                    // Trigger reflow
                    void p.offsetWidth;
                    p.style.animation = '';
                } else {
                    p.classList.remove('active');
                }
            });

            // Focus first input
            const firstInput = document.querySelector(`.calc-panel[data-calc="${target}"] .calc-input, .calc-panel[data-calc="${target}"] .frac-input`);
            if (firstInput) {
                setTimeout(() => firstInput.focus(), 100);
            }
        });
    });
}

// ---- Fraction Operator ----
function initFractionOperator() {
    const buttons = document.querySelectorAll('#fracOperator .op-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFracOp = btn.dataset.op;
        });
    });
}

// ---- Percentage Tabs ----
function initPercentageTabs() {
    const tabs = document.querySelectorAll('.pct-tab');
    const panels = document.querySelectorAll('.pct-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const mode = tab.dataset.mode;
            currentPctMode = mode;

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            panels.forEach(p => {
                p.classList.toggle('active', p.dataset.mode === mode);
            });
        });
    });
}

// ---- Keyboard Shortcuts ----
function initKeyboardShortcuts() {
    document.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            const activePanel = document.querySelector('.calc-panel.active');
            if (!activePanel) return;

            const calc = activePanel.dataset.calc;
            switch (calc) {
                case 'square-root': calculateSquareRoot(); break;
                case 'cube-root': calculateCubeRoot(); break;
                case 'nth-root': calculateNthRoot(); break;
                case 'fraction': calculateFraction(); break;
                case 'power': calculatePower(); break;
                case 'percentage': calculatePercentage(); break;
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

    document.querySelectorAll('.feature-card, .formula-item, .about-content, .section-header').forEach(el => {
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
//  Calculator Functions
// ============================================

// ---- Square Root ----
function calculateSquareRoot() {
    const input = document.getElementById('sqrtInput');
    const resultArea = document.getElementById('sqrtResult');
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
    const isExact = Number.isInteger(result);

    showResult(resultArea, {
        formula: `√${formatNum(value)} =`,
        value: formatResult(result),
        badge: isExact ? 'Perfect Square' : 'Approximation',
        breakdown: [
            { label: 'Input', value: formatNum(value) },
            { label: 'Result', value: formatResult(result) },
            { label: 'Squared', value: formatResult(result * result) },
        ],
        summary: isExact
            ? `${formatResult(result)} × ${formatResult(result)} = ${formatNum(value)}`
            : `Decimal approximation: ${result.toFixed(10)}`,
    });

    addHistory('sqrt', `√${formatNum(value)}`, formatResult(result));
}

// ---- Cube Root ----
function calculateCubeRoot() {
    const input = document.getElementById('cbrtInput');
    const resultArea = document.getElementById('cbrtResult');
    const value = parseFloat(input.value);

    if (isNaN(value)) {
        showError(resultArea, 'Please enter a valid number');
        return;
    }

    const result = Math.cbrt(value);
    const isExact = Number.isInteger(result);

    showResult(resultArea, {
        formula: `∛${formatNum(value)} =`,
        value: formatResult(result),
        badge: isExact ? 'Perfect Cube' : 'Approximation',
        breakdown: [
            { label: 'Input', value: formatNum(value) },
            { label: 'Result', value: formatResult(result) },
            { label: 'Cubed', value: formatResult(result ** 3) },
        ],
        summary: isExact
            ? `${formatResult(result)}³ = ${formatNum(value)}`
            : `Decimal approximation: ${result.toFixed(10)}`,
    });

    addHistory('cbrt', `∛${formatNum(value)}`, formatResult(result));
}

// ---- Nth Root ----
function calculateNthRoot() {
    const degreeInput = document.getElementById('nthDegree');
    const valueInput = document.getElementById('nthValue');
    const resultArea = document.getElementById('nthResult');
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
    });

    addHistory('nth', `${nStr}${formatNum(x)}`, formatResult(result));
}

// ---- Fraction ----
function calculateFraction() {
    const a1 = parseFloat(document.getElementById('fracA1').value);
    const b1 = parseFloat(document.getElementById('fracB1').value);
    const a2 = parseFloat(document.getElementById('fracA2').value);
    const b2 = parseFloat(document.getElementById('fracB2').value);
    const resultArea = document.getElementById('fracResult');

    if ([a1, b1, a2, b2].some(isNaN)) {
        showError(resultArea, 'Please fill in all fraction fields');
        return;
    }

    if (b1 === 0 || b2 === 0) {
        showError(resultArea, 'Denominator cannot be zero');
        return;
    }

    if (currentFracOp === '/' && a2 === 0) {
        showError(resultArea, 'Cannot divide by zero');
        return;
    }

    let numResult, denResult;
    const opSymbol = { '+': '+', '-': '−', '*': '×', '/': '÷' }[currentFracOp];

    switch (currentFracOp) {
        case '+':
            numResult = a1 * b2 + a2 * b1;
            denResult = b1 * b2;
            break;
        case '-':
            numResult = a1 * b2 - a2 * b1;
            denResult = b1 * b2;
            break;
        case '*':
            numResult = a1 * a2;
            denResult = b1 * b2;
            break;
        case '/':
            numResult = a1 * b2;
            denResult = b1 * a2;
            break;
    }

    // Simplify
    const g = gcd(Math.abs(numResult), Math.abs(denResult));
    const simpNum = numResult / g;
    const simpDen = denResult / g;

    // Ensure negative sign is in numerator
    const finalNum = simpDen < 0 ? -simpNum : simpNum;
    const finalDen = Math.abs(simpDen);

    const decimal = finalNum / finalDen;
    const wasSimplified = simpNum !== finalNum || simpDen !== finalDen;

    const formulaStr = `${formatNum(a1)}/${formatNum(b1)} ${opSymbol} ${formatNum(a2)}/${formatNum(b2)}`;
    const valueStr = finalDen === 1 ? `${formatNum(finalNum)}` : `${formatNum(finalNum)}/${formatNum(finalDen)}`;

    showResult(resultArea, {
        formula: `${formulaStr} =`,
        value: valueStr,
        badge: wasSimplified ? 'Simplified' : 'Result',
        breakdown: [
            { label: 'Decimal', value: formatResult(decimal) },
            { label: 'Numerator', value: formatNum(finalNum) },
            { label: 'Denominator', value: formatNum(finalDen) },
        ],
        summary: wasSimplified
            ? `Reduced from ${formatNum(numResult)}/${formatNum(denResult)}`
            : `Equivalent decimal: ${formatResult(decimal)}`,
    });

    addHistory('frac', formulaStr, valueStr);
}

function gcd(a, b) {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));
    while (b) {
        [a, b] = [b, a % b];
    }
    return a || 1;
}

// ---- Power ----
function calculatePower() {
    const base = parseFloat(document.getElementById('powerBase').value);
    const exp = parseFloat(document.getElementById('powerExp').value);
    const resultArea = document.getElementById('powerResult');

    if (isNaN(base) || isNaN(exp)) {
        showError(resultArea, 'Please fill in both fields');
        return;
    }

    if (base === 0 && exp < 0) {
        showError(resultArea, 'Cannot raise 0 to a negative power');
        return;
    }

    const result = Math.pow(base, exp);

    let expStr;
    if (exp === 2) expStr = '²';
    else if (exp === 3) expStr = '³';
    else if (exp === -1) expStr = '⁻¹';
    else if (exp === 0.5) expStr = '^½';
    else expStr = `^${formatNum(exp)}`;

    const isIntResult = Number.isInteger(result) && Number.isFinite(result);

    showResult(resultArea, {
        formula: `${formatNum(base)}${expStr} =`,
        value: formatResult(result),
        badge: isIntResult ? 'Exact' : (Number.isFinite(result) ? 'Approximation' : 'Undefined'),
        breakdown: [
            { label: 'Base', value: formatNum(base) },
            { label: 'Exponent', value: formatNum(exp) },
            { label: 'Type', value: Number.isFinite(result) ? 'Finite' : 'Infinite' },
        ],
        summary: Number.isFinite(result)
            ? `${formatNum(base)} raised to the power of ${formatNum(exp)}`
            : 'Result is infinity or undefined',
    });

    addHistory('power', `${formatNum(base)}${expStr}`, formatResult(result));
}

function setQuickPower(exp) {
    document.getElementById('powerExp').value = exp;
    const base = document.getElementById('powerBase');
    if (base.value) {
        calculatePower();
    } else {
        base.focus();
    }
}

// ---- Percentage ----
function calculatePercentage() {
    const resultArea = document.getElementById('pctResult');

    switch (currentPctMode) {
        case 'of': {
            const pct = parseFloat(document.getElementById('pctX').value);
            const num = parseFloat(document.getElementById('pctY').value);
            if (isNaN(pct) || isNaN(num)) {
                showError(resultArea, 'Please fill in both fields');
                return;
            }
            const result = (pct / 100) * num;
            showResult(resultArea, {
                formula: `${formatNum(pct)}% of ${formatNum(num)} =`,
                value: formatResult(result),
                badge: 'Result',
                breakdown: [
                    { label: 'Percentage', value: `${formatNum(pct)}%` },
                    { label: 'Of', value: formatNum(num) },
                    { label: 'Remainder', value: formatResult(num - result) },
                ],
                summary: `${formatNum(pct)} ÷ 100 × ${formatNum(num)} = ${formatResult(result)}`,
            });
            addHistory('pct', `${formatNum(pct)}% of ${formatNum(num)}`, formatResult(result));
            break;
        }
        case 'is': {
            const x = parseFloat(document.getElementById('pctIsX').value);
            const y = parseFloat(document.getElementById('pctIsY').value);
            if (isNaN(x) || isNaN(y)) {
                showError(resultArea, 'Please fill in both fields');
                return;
            }
            if (y === 0) {
                showError(resultArea, 'Total cannot be zero');
                return;
            }
            const result = (x / y) * 100;
            showResult(resultArea, {
                formula: `${formatNum(x)} is what % of ${formatNum(y)}?`,
                value: `${formatResult(result)}%`,
                badge: 'Ratio',
                breakdown: [
                    { label: 'Part', value: formatNum(x) },
                    { label: 'Whole', value: formatNum(y) },
                    { label: 'Fraction', value: formatResult(x / y) },
                ],
                summary: `${formatNum(x)} ÷ ${formatNum(y)} × 100 = ${formatResult(result)}%`,
            });
            addHistory('pct', `${formatNum(x)} is ?% of ${formatNum(y)}`, `${formatResult(result)}%`);
            break;
        }
        case 'change': {
            const oldVal = parseFloat(document.getElementById('pctOld').value);
            const newVal = parseFloat(document.getElementById('pctNew').value);
            if (isNaN(oldVal) || isNaN(newVal)) {
                showError(resultArea, 'Please fill in both fields');
                return;
            }
            if (oldVal === 0) {
                showError(resultArea, 'Old value cannot be zero');
                return;
            }
            const change = ((newVal - oldVal) / Math.abs(oldVal)) * 100;
            const direction = change >= 0 ? 'increase' : 'decrease';
            const diff = Math.abs(newVal - oldVal);
            showResult(resultArea, {
                formula: `% change from ${formatNum(oldVal)} to ${formatNum(newVal)}`,
                value: `${change >= 0 ? '+' : ''}${formatResult(change)}%`,
                badge: change >= 0 ? 'Increase' : 'Decrease',
                breakdown: [
                    { label: 'Old value', value: formatNum(oldVal) },
                    { label: 'New value', value: formatNum(newVal) },
                    { label: 'Difference', value: `${change >= 0 ? '+' : '−'}${formatResult(diff)}` },
                ],
                summary: `${direction === 'increase' ? 'Rose' : 'Fell'} by ${formatResult(diff)} (${Math.abs(change).toFixed(2)}%)`,
            });
            addHistory('pct', `${formatNum(oldVal)} → ${formatNum(newVal)}`, `${change >= 0 ? '+' : ''}${formatResult(change)}%`);
            break;
        }
    }
}

// ============================================
//  UI Helpers
// ============================================

function showResult(area, { formula, value, badge, breakdown, summary }) {
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

    area.innerHTML = `
        <div class="result-filled">
            <div class="result-panel-header">
                <span class="result-panel-label">Result</span>
                <span class="result-status ${statusClass}">${badge || 'Result'}</span>
            </div>
            <div class="result-expression">${formula}</div>
            <div class="result-answer">${value}</div>
            ${breakdownHtml ? `<div class="result-breakdown">${breakdownHtml}</div>` : ''}
            ${summary ? `
                <div class="result-summary">
                    <span class="result-summary-icon">i</span>
                    <span>${summary}</span>
                </div>
            ` : ''}
        </div>
    `;
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
        frac: 'fracHistory',
        power: 'powerHistory',
        pct: 'pctHistory',
    };

    const listMap = {
        sqrt: 'sqrtHistoryList',
        cbrt: 'cbrtHistoryList',
        nth: 'nthHistoryList',
        frac: 'fracHistoryList',
        power: 'powerHistoryList',
        pct: 'pctHistoryList',
    };

    const countMap = {
        sqrt: 'sqrtHistoryCount',
        cbrt: 'cbrtHistoryCount',
        nth: 'nthHistoryCount',
        frac: 'fracHistoryCount',
        power: 'powerHistoryCount',
        pct: 'pctHistoryCount',
    };

    histories[type].unshift({ expression, result });
    if (histories[type].length > MAX_HISTORY) {
        histories[type].pop();
    }

    const container = document.getElementById(historyMap[type]);
    container.classList.add('show');

    const countEl = document.getElementById(countMap[type]);
    if (countEl) {
        countEl.textContent = `${histories[type].length}`;
    }

    const list = document.getElementById(listMap[type]);
    list.innerHTML = histories[type].map((item, i) => `
        <div class="history-item" style="animation-delay: ${i * 50}ms">
            <span class="history-expression">${item.expression}</span>
            <span class="history-result">= ${item.result}</span>
        </div>
    `).join('');
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

// ---- Mouse glow effect on feature cards ----
document.addEventListener('mousemove', e => {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
    });
});
