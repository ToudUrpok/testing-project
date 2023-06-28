const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings module testing', () => {

    test('conversion with all numbers', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    });

    test('filter not numbers', () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined, '5'])).toEqual(['1', '2', '3']);
    });

    test('empty array', () => {
        expect(mapArrToStrings([])).toEqual([]);
    });

    test('negative case', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
    });
});