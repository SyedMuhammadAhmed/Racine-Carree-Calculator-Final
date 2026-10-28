import test from 'node:test';
import assert from 'node:assert/strict';
import { parseNumericInput, realRoot, exactIntegerRoot, simplifyRoot, factorInteger } from '../src/lib/rootMath.js';

test('accepts complete decimal, scientific and fraction inputs, including French commas', () => {
    for (const [text, value] of [['9/16', .5625], ['2,25', 2.25], ['−16', -16], ['-8/27', -8/27], [' 1.44e2 ', 144], ['0', 0]]) {
        assert.equal(parseNumericInput(text), value);
    }
});
test('rejects malformed, ambiguous, infinite, unsafe and underflowing inputs', () => {
    for (const raw of ['', '1/0', '1/2/3', '2abc', '1,234.56', '1 234', 'Infinity', 'NaN', '9007199254740993', '1e999', '1e-999', '0x10']) {
        assert.throws(() => parseNumericInput(raw), Error, raw);
    }
});
test('does not fabricate exact radicals by rounding decimal radicands', () => {
    assert.equal(simplifyRoot(72, 2, '√'), '6√2');
    assert.equal(simplifyRoot(72.1, 2, '√'), null);
    assert.equal(simplifyRoot(-54, 3, '∛'), '−3∛2');
    assert.equal(simplifyRoot(1e13, 2, '√'), null);
    assert.equal(factorInteger(2.25), null);
});
test('recognizes perfect integer powers despite floating-point exponent errors', () => {
    for (let degree = 2; degree <= 20; degree++) {
        for (let root = 2; root <= 10; root++) {
            const n = root ** degree;
            if (Number.isSafeInteger(n)) {
                assert.equal(exactIntegerRoot(n, degree), root, `${root}^${degree}`);
                assert.equal(realRoot(n, degree), root);
                assert.equal(exactIntegerRoot(n + 1, degree), null);
                if (degree % 2) assert.equal(realRoot(-n, degree), -root);
            }
        }
    }
});
test('handles domain boundaries, tiny roots and degree limits', () => {
    assert.equal(realRoot(0, 10000), 0);
    assert.equal(realRoot(1, 10000), 1);
    assert.equal(realRoot(-1, 9999), -1);
    assert.equal(realRoot(.25, 2), .5);
    assert.equal(realRoot(1e-100, 2), 1e-50);
    assert.throws(() => realRoot(-16, 2), /realDomain/);
    for (const d of [0, -1, .5, 10001]) assert.throws(() => realRoot(16, d), /degree/);
});
