// FUNCTION IMPLEMENTATION
const head = arr => arr[0];

// assertEqual 
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

// TEST CODE
assertEqual(head([5,6,7]), 5);  // 
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
assertEqual(head([])); 