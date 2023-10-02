const words = ["ground", "control", "to", "major", "tom"];

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

// assertArraysEqual
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) { // Using eqArrays for array comparison
    console.log(`Assertion Passed: ${arr1} === ${arr2}`); // console log passed
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`); // console log fail
  }
};

//map function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

///TEST 
const results = map(words, word => word[0]);  // -- return first letter of each word.
assertArraysEqual(results, ['g', 'c', 't', 'm', 't']);  // Should pass the assertion since the result is the first letter of each word.

const results1 = map(words, word => word[word.length - 1]); // -- last word
assertArraysEqual(results1, ['d', 'l', 'o', 'r', 'm']);  // Should pass the assertion since the result is the last letter of each word.

const results2 = map(words, word => word.length);  // length
assertArraysEqual(results2, [6, 7, 2, 5, 3]);  // Should pass the assertion since the result is the length of each word.
