//assertEqual
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

//find key

function findKey(object, callback) {
  for (let key in object) { // important loop for objects
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
}

//test

const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(restaurants, x => x.stars === 2), "noma"); // Should pass
assertEqual(findKey(restaurants, x => x.stars === 4), undefined); // Should pass
assertEqual(findKey(restaurants, x => x.stars === 3), "Akaleri"); // Should pass
assertEqual(findKey({}, x => x.stars === 2), undefined); // Test with empty object, should pass






