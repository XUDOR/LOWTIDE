//takeUnitl function

function takeUntil(array, callback) {
  let result = [];
  for(let item of array) {
      if (callback(item)) { // If callback returns truthy, stop and return the current result.
          return result;
      }
      result.push(item);
  }
  return result; // In case the loop finishes without the callback ever returning true.
}


//module
module.exports = takeUntil;