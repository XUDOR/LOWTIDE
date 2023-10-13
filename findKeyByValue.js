// Function to find the key by its value
const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);

  for (let key of keys) {
    if (object[key] === value) {
      return key;
    }
  }

  return undefined;
};


//module export
module.exports = findKeyByValue;