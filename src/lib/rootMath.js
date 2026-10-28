// Numeric input is deliberately bounded: integer claims must be reproducible.
export const MAX_INPUT = Number.MAX_SAFE_INTEGER;
export const FACTOR_LIMIT = 1e12;

export function parseNumericInput(raw) {
    const text = String(raw).trim().replaceAll('−', '-');
    const parts = text.split('/');
    if (!text || parts.length > 2) throw new Error('input');
    const decimal = /^[+-]?(?:\d+(?:[.,]\d*)?|[.,]\d+)(?:e[+-]?\d+)?$/i;
    const numbers = parts.map(part => {
        const token = part.trim();
        if (!decimal.test(token)) throw new Error('input');
        const normalized = token.replace(',', '.');
        const value = Number(normalized);
        if (!Number.isFinite(value) || Math.abs(value) > MAX_INPUT) throw new Error('range');
        if (value === 0 && /[1-9]/.test(normalized.split(/e/i)[0])) throw new Error('range');
        return value;
    });
    if (numbers.length === 2 && numbers[1] === 0) throw new Error('zeroDenominator');
    const value = numbers.length === 2 ? numbers[0] / numbers[1] : numbers[0];
    if (!Number.isFinite(value) || Math.abs(value) > MAX_INPUT || (value === 0 && numbers[0] !== 0)) throw new Error('range');
    return Object.is(value, -0) ? 0 : value;
}

export function exactIntegerRoot(value, degree) {
    if (!Number.isSafeInteger(value) || !Number.isInteger(degree) || degree < 1 || degree > 10000) return null;
    if (value < 0 && degree % 2 === 0) return null;
    if (degree === 1 || Math.abs(value) <= 1) return value;
    // 2^53 exceeds the accepted integer domain, so no larger degree can fit.
    if (degree > 52) return null;
    const magnitude = Math.abs(value);
    const estimate = Math.round(magnitude ** (1 / degree));
    for (const candidate of [estimate - 1, estimate, estimate + 1]) {
        if (candidate >= 0 && BigInt(candidate) ** BigInt(degree) === BigInt(magnitude)) {
            return value < 0 ? -candidate : candidate;
        }
    }
    return null;
}

export function realRoot(value, degree) {
    if (!Number.isFinite(value) || !Number.isInteger(degree) || degree < 1 || degree > 10000) throw new Error('degree');
    if (value < 0 && degree % 2 === 0) throw new Error('realDomain');
    const exact = exactIntegerRoot(value, degree);
    if (exact !== null) return exact;
    if (degree === 1) return value;
    if (degree === 2) return Math.sqrt(value);
    if (degree === 3) return Math.cbrt(value);
    return Math.sign(value) * Math.abs(value) ** (1 / degree);
}

export function factorInteger(value) {
    if (!Number.isSafeInteger(value) || Math.abs(value) > FACTOR_LIMIT) return null;
    let n = Math.abs(value);
    const factors = [];
    for (let divisor = 2; divisor * divisor <= n; divisor += divisor === 2 ? 1 : 2) {
        while (n % divisor === 0) { factors.push(divisor); n /= divisor; }
    }
    if (n > 1) factors.push(n);
    return factors;
}

export function simplifyRoot(value, degree, symbol) {
    if (!Number.isInteger(degree) || degree < 1 || degree > 10000 || (value < 0 && degree % 2 === 0)) return null;
    const factors = factorInteger(value);
    if (!factors || !factors.length) return null;
    const counts = new Map();
    for (const factor of factors) counts.set(factor, (counts.get(factor) || 0) + 1);
    let outside = 1, inside = 1;
    for (const [factor, count] of counts) {
        outside *= factor ** Math.floor(count / degree);
        inside *= factor ** (count % degree);
    }
    if (outside === 1 || inside === 1) return null;
    return `${value < 0 ? '−' : ''}${outside}${symbol}${inside}`;
}
