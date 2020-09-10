const { test, expect } = require('@jest/globals');
const Scientific = require('../calculator/scientific-calculator');


test('adds 5 + 5 + 5 to equal 15', () => {
    const items = [5, 5, 5]
    const scientific = new Scientific(items);
    expect(scientific.sum(items)).toBe(15);
});

test('subs 25 - 5 to equal 20', () => {
    const items = [25, 5]
    const scientific = new Scientific(items);
    expect(scientific.sub(items)).toBe(20);
});

test('Factorial 2 to equal 2', () => {
    const items = [2]
    const scientific = new Scientific(items);
    expect(scientific.factorialize(items)).toBe(2);
});

test('Factorial 6 to equal 720', () => {
    const items = [2]
    const scientific = new Scientific(items);
    expect(scientific.factorialize(items)).toBe(2);
});