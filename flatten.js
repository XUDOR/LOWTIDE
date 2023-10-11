// flatten 

function flatten(arr) {
  let flatArray = [];
  
  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          flatArray = flatArray.concat(flatten(arr[i]));
      } else {
          flatArray.push(arr[i]);
      }
  }
  
  return flatArray;
}



/*
// Testing
const nestedArray = [1, 2, [3, 4, [5, 6], 7], 8];
console.log(flatten(nestedArray));  // Output: [1, 2, 3, 4, 5, 6, 7, 8]

//assertArrayEquals
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) { // Using eqArrays for array comparison
    console.log(`Assertion Passed: ${arr1} === ${arr2}`); // console log passed
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`); // console log fail
  }
};

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

//TEST using AssertEqual >>

const flatResult = flatten([1, [2, 3], [4, [5, 6]]]);
const expectedResult = [1, 2, 3, 4, 5, 6];

// This will print a message indicating whether the flattened result is the expected result.
assertArraysEqual(flatResult, expectedResult);
