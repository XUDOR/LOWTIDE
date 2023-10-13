
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

//module
module.exports = countOnly;