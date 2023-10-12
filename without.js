// without function ***WITH .FILTER
const without = (source, itemsToRemove) => { // arrow function with array arguments
  // filter the source array
  return source.filter(item => !itemsToRemove.includes(item));//uses filter and includes
};

//module
module.exports = without;