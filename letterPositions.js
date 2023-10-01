// eqArrays function
function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// assertArraysEqual function
function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
}

// letterPositions function
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (!results[char]) {
      results[char] = []; // Initialize the array for this character if it doesn't exist
    }
    
    results[char].push(i);
  }
  
  return results;
}

// Tests
console.log(letterPositions("Roderick"));
console.log(letterPositions("Roderick").i);
assertArraysEqual(letterPositions("Roderick").R, [0]);
