/*// eqArrays function
function eqArrays(arr1, arr2) { // function definition 
  if (arr1.length !== arr2.length) { // array comparison
      return false;
  }
  for (let i = 0; i < arr1.length; i++) { // loops through array
      if (arr1[i] !== arr2[i]) {
          return false;
      }
  }
  return true;
}
*/
// eqArrays function
function eqArrays(arr1, arr2) { // function definition 
  if (arr1.length !== arr2.length) { // array comparison
      return false;
  }
  for (let i = 0; i < arr1.length; i++) { // loops through array
      if (arr1[i] !== arr2[i]) {
          return false;
      }
  }
  return true;
}

// assertEqual
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`); // console log fail
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`); // console log passed
  }
};

// assertArraysEqual
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) { // Using eqArrays for array comparison
    console.log(`Assertion Passed: ${arr1} === ${arr2}`); // console log passed
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`); // console log fail
  }
};

// Test Cases for assertArraysEqual
assertArraysEqual([1, 2, 3], [1, 2, 3]);  // Should print: Assertion Passed: 1,2,3 === 1,2,3
assertArraysEqual([1, 2, 3], [1, 2, 4]);  // Should print: Assertion Failed: 1,2,3 !== 1,2,4
assertArraysEqual([], []);  // Should print: Assertion Passed:  === 
