
/*
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // should pass
assertEqual(eqArrays([1, 2], [1, 2, 3]), false); // should pass
*/

// Mocha/CHai

const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns false for [1, 2, 3] and [1, 2, 4]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);
  });

  it("returns false for [1, 2] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2], [1, 2, 3]), false);
  });
});
