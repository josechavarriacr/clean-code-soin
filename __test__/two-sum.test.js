const { describe, test, expect } = require('@jest/globals');
const sum = require('../calculator/array-sum');
// const sum = require('../calculator/simple-sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum([1, 2])).toBe(3);
});