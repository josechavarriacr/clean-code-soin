const { test, expect } = require('@jest/globals');
const Calculator = require('../calculator/calculator');


test('adds 1 + 2 to equal 3', () => {
    const items = [1, 2]
    const calculator = new Calculator(items);
    expect(calculator.sum(items)).toBe(3);
});

test('subs 25 - 5 to equal 20', () => {
    const items = [25, 5]
    const calculator = new Calculator(items);
    expect(calculator.sub(items)).toBe(20);
});