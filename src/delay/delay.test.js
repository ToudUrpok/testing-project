const delay = require('./delay');

describe('delay module testing', () => {
    test('valid value', async () => {
        const sum = await delay(() => 5 + 5, 3000);
        expect(sum).toBe(10);
    });
});