const { test, expect } = require('@jest/globals');
const sum = require('../calculator/array-sum');

test('adds 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 0 to equal 45', () => {
  expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ])).toBe(45);
}); 