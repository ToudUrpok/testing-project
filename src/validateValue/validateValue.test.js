const validateValue = require('./validateValue');

describe('valideValue module testing', () => {

    test('valid value', () => {
        expect(validateValue(50)).toBe(true);
    });

    test('min valid value', () => {
        expect(validateValue(0)).toBe(true);
    });

    test('max valid value', () => {
        expect(validateValue(100)).toBe(true);
    });

    test('less than valid value', () => {
        expect(validateValue(-1)).toBe(false);
    });

    test('greater than valid value', () => {
        expect(validateValue(101)).toBe(false);
    });
});