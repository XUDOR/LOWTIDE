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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) { // Using eqArrays for array comparison
    console.log(`Assertion Passed: ${arr1} === ${arr2}`); // console log passed
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`); // console log fail
  }
};



// without function ***WITH .FILTER
const without = (source, itemsToRemove) => { // arrow function with array arguments
  // filter the source array
  return source.filter(item => !itemsToRemove.includes(item));//uses filter and includes
};

//------------
// without function ***WITH FOR LOOP & PUSH
// const without = (source, itemsToRemove) => { // 2new arrays
//   let newArray = []; // store the elements in array  to keep
  
//   for (let i = 0; i < source.length; i++) { // Loop array
//     if (!itemsToRemove.includes(source[i])) { // .includes comparitor
//       newArray.push(source[i]); // new array
//     }
//   }

//   return newArray;
// };




// Test Cases for the without function

// Test Case 1: Basic test case
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // Should print: Assertion Passed: 2,3 === 2,3

// Test Case 2: Test with mixed types (numbers and strings)
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // Should print: Assertion Passed: 1,2 === 1,2

// Test Case 3: Test to ensure original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Should print: Assertion Passed: hello,world,lighthouse === hello,world,lighthouse

// Add more test cases as necessary...
