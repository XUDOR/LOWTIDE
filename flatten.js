// flatten

const flatten = function(arr) {
  let flatArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray = flatArray.concat(flatten(arr[i]));
    } else {
      flatArray.push(arr[i]);
    }
  }
  
  return flatArray;
};

//module export
module.exports = flatten;