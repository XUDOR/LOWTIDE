//find Key
function findKey(object, callback) {
  for (let key in object) { // important loop for objects
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
}


//module export
module.exports = findKey;