
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

// assertArraysEqual
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) { // Using eqArrays for array comparison
    console.log(`Assertion Passed: ${arr1} === ${arr2}`); // console log passed
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`); // console log fail
  }
};

//module export
module.exports = assertArraysEqual;