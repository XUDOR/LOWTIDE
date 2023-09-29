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
