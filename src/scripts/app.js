import { parseNumericInput, realRoot, exactIntegerRoot, factorInteger, simplifyRoot } from '../lib/rootMath.js';
import { rootCopy } from '../lib/rootCopy.js';
const resultLocale = document.documentElement.lang || 'en';
const copy = rootCopy(resultLocale);

/* ============================================
   Racine Carrée Calculator: Application Logic
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
    initQuickCalc();
    initAccessibleControls();
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
            if (!response.ok || result.success !== true) throw new Error(result.message || form.dataset.msgError);

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
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {}
        if (toggle) {
            const isDark = theme === 'dark';
            toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
            toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
            toggle.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
        }
    }

    let stored = null;
    try {
        stored = localStorage.getItem('theme');
    } catch (e) {}
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    applyTheme(stored || preferred);

    toggle?.addEventListener('click', () => {
        const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        let hasStored = false;
        try {
            hasStored = Boolean(localStorage.getItem('theme'));
        } catch (err) {}
        if (!hasStored) {
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
function revealFragment(hash) {
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

// Shared calculation path: all entry points use the same validation and arithmetic.
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
            if (!/^\d+$/.test(rawDegree)) throw new Error('degree');
            degree = Number(rawDegree);
            if (degree < 1 || degree > 10000) throw new Error('degree');
        }
        const imaginary = kind === 'sqrt' && value < 0;
        const radicand = imaginary ? Math.abs(value) : value;
        const result = realRoot(radicand, degree);
        const literalInteger = /^[+-]?\d+$/.test(input.value.trim().replaceAll('−', '-'));
        const exact = literalInteger && exactIntegerRoot(radicand, degree) !== null;
        const symbol = degree === 2 ? '√' : degree === 3 ? '∛' : `${degree}√`;
        const suffix = imaginary ? 'i' : '';
        const rendered = `${formatResult(result)}${suffix}`;
        const radical = literalInteger ? simplifyRoot(radicand, degree, symbol) : null;
        const simplified = radical ? `${radical}${suffix}` : null;
        const factors = literalInteger ? factorInteger(radicand) : null;
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

// ============================================
//  Quick Calculate
// ============================================

function initQuickCalc() {
    const chips = document.querySelectorAll('.quick-calc-chip');
    if (!chips.length) return;

    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            const calcType = chip.dataset.calcType || 'sqrt';
            const val = parseFloat(chip.dataset.value);
            if (!Number.isFinite(val)) return;

            let result;
            let resultStr = '';
            let targetScroll = null;

            if (calcType === 'cbrt') {
                const cbrtInput = document.getElementById('cbrtInput');
                if (cbrtInput) {
                    cbrtInput.value = val;
                    calculateCubeRoot();
                }
                result = realRoot(val, 3);
                resultStr = formatResult(result);
                targetScroll = document.getElementById('cbrtResult');
            } else if (calcType === 'nth') {
                const deg = parseFloat(chip.dataset.degree);
                const nthDegree = document.getElementById('nthDegree');
                const nthValue = document.getElementById('nthValue');
                if (nthDegree && nthValue && Number.isFinite(deg)) {
                    nthDegree.value = deg;
                    nthValue.value = val;
                    calculateNthRoot();
                }
                if (Number.isFinite(deg) && deg > 0) {
                    if (val < 0 && deg % 2 === 1) {
                        result = realRoot(val, deg);
                    } else if (val >= 0) {
                        result = realRoot(val, deg);
                    }
                }
                if (result !== undefined && Number.isFinite(result)) {
                    resultStr = formatResult(result);
                }
                targetScroll = document.getElementById('nthResult');
            } else {
                const sqrtInput = document.getElementById('sqrtInput');
                if (sqrtInput) {
                    sqrtInput.value = val;
                    calculateSquareRoot();
                }
                result = realRoot(Math.abs(val), 2);
                resultStr = formatResult(result);
                if (val < 0) resultStr += 'i';
                targetScroll = document.getElementById('sqrtResult');
            }

            // Highlight the active chip within its container
            const container = chip.closest('.quick-calc-chips') || document;
            container.querySelectorAll('.quick-calc-chip').forEach(c => c.classList.remove('is-active'));
            chip.classList.add('is-active');

            // Update the chip label with the instant result
            const eqEl = chip.querySelector('.quick-chip-eq');
            if (eqEl && resultStr) {
                eqEl.textContent = `= ${resultStr}`;
                eqEl.setAttribute('aria-label', `equals ${resultStr}`);
            }

            // Scroll result into view smoothly
            targetScroll?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });
}

// ============================================
//  UI Helpers
// ============================================

/**
 * Escapes HTML special characters in user-derived strings before inserting
 * them via innerHTML. Prevents potential XSS if any user-derived value
 * ever contains HTML metacharacters.
 */
function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    const div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML;
}
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
            <span class="result-stat-label">${escapeHtml(item.label)}</span>
            <span class="result-stat-value">${escapeHtml(item.value)}</span>
        </div>
    `).join('');

    const CHEVRON_SVG = `<svg class="steps-chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

    const stepsHtml = (steps || []).length ? `
        <details class="result-steps">
            <summary class="result-steps-header">
                <span style="display:flex;align-items:center;gap:8px">${STEPS_SVG} ${escapeHtml(copy.steps)}</span>
                ${CHEVRON_SVG}
            </summary>
            <ol class="result-steps-list">
                ${steps.map((s, i) => `
                    <li class="result-step" style="--step-i: ${i}">
                        <span class="result-step-num">${i + 1}</span>
                        <div class="result-step-body">
                            <span class="result-step-title">${escapeHtml(s.title)}</span>
                            <span class="result-step-math">${escapeHtml(s.math)}</span>
                        </div>
                    </li>
                `).join('')}
            </ol>
        </details>
    ` : '';

    const safeFormula = escapeHtml(formula);
    const safeValue = escapeHtml(value);
    const safeSummary = escapeHtml(summary);
    const safeBadge = escapeHtml(({ Exact: copy.exact, Approximation: copy.approx, 'Imaginary Number': copy.imaginary })[badge] || copy.result);
    const safeSimplified = simplifiedRadical ? escapeHtml(simplifiedRadical) : null;

    area.innerHTML = `
        <div class="result-filled">
            <div class="result-panel-header">
                <span class="result-panel-label">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    ${escapeHtml(copy.result)}
                </span>
                <span class="result-status ${statusClass}">${safeBadge}</span>
            </div>
            <div class="result-expression">${safeFormula}</div>
            <div class="result-answer" style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;">
                <span>${safeValue}</span>
                <button type="button" class="btn-copy-result" aria-label="${escapeHtml(copy.copy)} ${safeValue}" title="${escapeHtml(copy.copy)}" style="background:var(--bg-glass-strong);border:1px solid var(--border-default);border-radius:6px;padding:4px 8px;font-size:0.75rem;font-weight:600;color:var(--text-secondary);cursor:pointer;display:inline-flex;align-items:center;gap:4px;transition:all 0.2s;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    <span>${escapeHtml(copy.copy)}</span>
                </button>
            </div>
            ${safeSimplified ? `
                <div class="result-simplified-banner" style="margin: 8px auto 14px; padding: 6px 14px; background: rgba(124, 58, 237, 0.12); border: 1px solid rgba(124, 58, 237, 0.35); border-radius: 8px; font-size: 0.95rem; display: inline-flex; align-items: center; justify-content: center; gap: 8px; width: fit-content; max-width: 100%;">
                    <span style="color: var(--primary-400); font-weight: 600;">${escapeHtml(copy.simplified)}:</span>
                    <strong style="font-family: var(--font-mono, monospace); font-size: 1.05rem; color: var(--text-primary);">${safeSimplified}</strong>
                </div>
            ` : ''}
            ${breakdownHtml ? `<div class="result-breakdown">${breakdownHtml}</div>` : ''}
            ${safeSummary ? `
                <div class="result-summary">
                    <span class="result-summary-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                    </span>
                    <span>${safeSummary}</span>
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

async function copyResultText(btn, text) {
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
    return new Intl.NumberFormat(resultLocale, { maximumSignificantDigits: Number.isSafeInteger(n) ? 17 : 12, useGrouping: false, notation: Math.abs(n) > 0 && Math.abs(n) < 1e-6 ? 'scientific' : 'standard' }).format(n);
}

function renderHistory(type) {
    const historyMap = { sqrt: 'sqrtHistory', cbrt: 'cbrtHistory', nth: 'nthHistory' };
    const listMap = { sqrt: 'sqrtHistoryList', cbrt: 'cbrtHistoryList', nth: 'nthHistoryList' };
    const countMap = { sqrt: 'sqrtHistoryCount', cbrt: 'cbrtHistoryCount', nth: 'nthHistoryCount' };

    const container = document.getElementById(historyMap[type]);
    if (container) container.classList.add('show');

    const countEl = document.getElementById(countMap[type]);
    if (countEl) countEl.textContent = `${histories[type].length}`;

    // Calculator re-run callbacks keyed by type
    const calcFns = { sqrt: calculateSquareRoot, cbrt: calculateCubeRoot, nth: calculateNthRoot };
    const inputIds = { sqrt: 'sqrtInput', cbrt: 'cbrtInput', nth: 'nthValue' };

    const list = document.getElementById(listMap[type]);
    if (list) {
        const entries = histories[type]
            .filter(item => item && typeof item.expression === 'string' && typeof item.result === 'string')
            .map((item, i) => {
                // Use a <button> so history items are keyboard-accessible and announced by screen readers
                const entry = document.createElement('button');
                entry.type = 'button';
                entry.className = 'history-item';
                entry.style.animationDelay = `${i * 50}ms`;
                entry.setAttribute('aria-label', `Recall calculation: ${item.expression} = ${item.result}`);
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
