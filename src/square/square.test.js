const square = require('./square');

describe('square module testing', () => {
    let mockValue;
        
    beforeAll(() => {

    });

    afterAll(() => {

    });

    beforeEach(() => {

    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('valid value', () => {
        const result = square(2);
        expect(result).toBe(4);
        expect(result).toBeLessThan(5);
        expect(result).toBeGreaterThan(3);
        expect(result).not.toBeUndefined();
    });

    test('function called check', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    });

    test('function nat called check', () => {
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    });
});