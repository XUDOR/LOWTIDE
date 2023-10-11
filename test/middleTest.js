//  Mocha

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});


// === tests
/* const assertEqual = require('../assertEqual');
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test cases
assertArraysEqual(middle([1]), []);  // Should print: "Assertion Passed:  === "
assertArraysEqual(middle([1, 2]), []);  // Should print: "Assertion Passed:  === "
assertArraysEqual(middle([1, 2, 3]), [2]);  // Should print: "Assertion Passed: 2 === 2"
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);  // Should print: "Assertion Passed: 3 === 3"
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);  // Should print: "Assertion Passed: 2,3 === 2,3"
*/