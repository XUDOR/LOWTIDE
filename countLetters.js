// function counts
function countLetters(sentence) {
  let counts = {};
  for (let char of sentence) {  // Looping through each character in the sentence
    char = char.toLowerCase();
    // Ensuring the character is a letter and not a space
    if (char >= 'a' && char <= 'z') {
      counts[char] = (counts[char] || 0) + 1; // Incrementing the count for the character
    }
  }
  return counts;
}

//module
module.exports = countLetters;