// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// use reduce method to create an object set mapped to the corresponding
// character count
// use reduce on the key value pairs to filter out the maximum count
// refactor modularize by separating out into individual methods
function findMaxCharacter(characterSet) {
   const maxCharSet = Object.entries(characterSet).reduce((a, b) => {
    return a[1] > b[1] ? a : b;
  });

  return maxCharSet[0];
}

function generateCharacterSet(string) {
  return string.split('').reduce((characterCount, character) => {
    characterCount[character] = ++characterCount[character] || 1;

    return characterCount;
  }, {})
}

function maxChar(string) {
  const characterSet = generateCharacterSet(string);

  return findMaxCharacter(characterSet);
}

module.exports = maxChar;
