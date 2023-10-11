const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // should pass
assertEqual(eqArrays([1, 2], [1, 2, 3]), false); // should pass