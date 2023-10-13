// eqArrays function
const eqArrays = function(arr1, arr2) { // function definition
  if (arr1.length !== arr2.length) { // array comparison
    return false;
  }
  for (let i = 0; i < arr1.length; i++) { // loops through array
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


//module export
module.exports = eqArrays;