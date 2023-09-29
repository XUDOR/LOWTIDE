// eqArrays function
function eqArrays(arr1, arr2) { // function declaration
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


//assertEquals
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) { // Using eqArrays for array comparison
    console.log(`Assertion Passed: ${arr1} === ${arr2}`); // console log passed
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`); // console log fail
  }
};

//middle
const middle = function(array) { // function expression
  const length = array.length;
  if (length <= 2) return []; // if !middle
  
  if (length % 2 === 0) { // If even number of elements
    return [array[(length / 2) - 1], array[length / 2]];
  } else { // If odd number of elements
    return [array[Math.floor(length / 2)]];
  }
}



