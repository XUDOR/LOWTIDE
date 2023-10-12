
//middle
const middle = function(array) { // function expression
  const length = array.length;
  if (length <= 2) return []; // if !middle
  
  if (length % 2 === 0) { // If even number of elements
    return [array[(length / 2) - 1], array[length / 2]];
  } else { // If odd number of elements
    return [array[Math.floor(length / 2)]];
  }
};

//module export
module.exports = middle;

