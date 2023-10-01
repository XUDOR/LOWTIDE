// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

// countOnly function
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) { //for of
    // Check if the item is present in itemsToCount and has a truthy value
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1; // Increment the count if the item is already in results
      } else {
        results[item] = 1;  // Initialize the count for the item if it's not in results yet
      }
    }
  }

  return results;
};

// Test data
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// Test cases
assertEqual(result1["Jason"], 1);       // Expected output: Assertion Passed: 1 === 1
assertEqual(result1["Karima"], undefined); // Expected output: Assertion Passed: undefined === undefined
assertEqual(result1["Fang"], 2);         // Expected output: Assertion Passed: 2 === 2
assertEqual(result1["Agouhanna"], undefined); // Expected output: Assertion Passed: undefined === undefined
