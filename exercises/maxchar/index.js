// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// use reduce method to create an object set mapped to the corresponding
// character count
// use reduce on the key value pairs to filter out the maximum count.
function maxChar(str) {
  const characterCount = str.split('').reduce((characterCount, character) => {
    characterCount[character] = ++characterCount[character] || 1;

    return characterCount;
  }, {} )

  const largestCount = Object.entries(characterCount).reduce((a, b) => {
    return a[1] > b[1] ? a : b;
  });

  return largestCount[0];
}

module.exports = maxChar;
