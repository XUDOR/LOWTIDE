// Mocha/Chai
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("should return false for 'Lighthouse Labs' and 'Bootcamp'", () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  it("should return true for 1 and 1", () => {
    assert.isTrue(assertEqual(1, 1));
  });
});

// === test
/*const assertEqual = require('../assertEqual');


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);*/