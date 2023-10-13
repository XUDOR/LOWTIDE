// letterPositions function
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (!results[char]) {
      results[char] = []; // Initialize the array for this character if it doesn't exist
    }
    
    results[char].push(i);
  }
  
  return results;
};

//module export
module.exports = letterPositions;