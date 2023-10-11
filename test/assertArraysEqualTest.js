const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');

// Test Cases for assertArraysEqual
assertArraysEqual([1, 2, 3], [1, 2, 3]);  // Should print: Assertion Passed: 1,2,3 === 1,2,3
assertArraysEqual([1, 2, 3], [1, 2, 4]);  // Should print: Assertion Failed: 1,2,3 !== 1,2,4
assertArraysEqual([], []);  // Should print: Assertion Passed:  ===