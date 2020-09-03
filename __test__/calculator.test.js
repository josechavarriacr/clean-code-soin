const { describe, test, expect } = require('@jest/globals');
const Calculator = require('../calculator/calculator');


test('adds 1 + 2 to equal 3', () => {
    const calculator = new Calculator([1, 2]);
    expect(calculator.sum([1, 2])).toBe(3);
});