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
    char = char.toLowerCase();
    // Ensuring the character is a letter and not a space
    if (char >= 'a' && char <= 'z') {
      counts[char] = (counts[char] || 0) + 1; // Incrementing the count for the character
    }
  }

  return counts;
}

// Testing the function
let result = countLetters('LHL');
console.log(result); // Should log: { l: 2, h: 1 }

result = countLetters("lighthouse in the house");
console.log(result); 
// Should log: 
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1
// }
