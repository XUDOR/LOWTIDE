// assertEqual function
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};


function countLetters(sentence) {
  let counts = {};

  // Looping through each character in the sentence
  for (let char of sentence) {
    char = char.toUpperCase();
    if (char >= 'A' && char <= 'Z') { // Ensuring the character is a letter
      counts[char] = (counts[char] || 0) + 1; // Incrementing the count for the character
    }
  }

  return counts;
}

// Testing the function
let result = countLetters('LHL');
console.log(result); // Should log: { L: 2, H: 1 }
