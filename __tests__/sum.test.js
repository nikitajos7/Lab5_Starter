// sum.test.js

import { sum } from '../code-to-unit-test/sum.js';

test('adds 1 + 2 to equal 3 without sum function', () => {
  expect(1 + 2).toBe(3);
});

test('adds 1 + 2 to equal 3 with sum function', () => {
  expect(sum(1, 2)).toBe(3);
});
