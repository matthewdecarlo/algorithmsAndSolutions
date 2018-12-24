// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
// add solution solving with method to reduce and filter the difference within
// two objects.
const {generateCharacterSet} = require('../maxchar/index.js');

function parseString(string) {
  return string.replace(/[^\w]/g, '').toLowerCase();
}

function findDifference(setA, setB) {
  const keys = Object.keys({...setA, ...setB});

  return keys.reduce((filtered, key) => {
    const isIdentical = setA[key] === setB[key];

    if (isIdentical) return filtered;

    filtered[key] = [setA[key], setB[key]];

    return filtered
  }, {});
}

function anagrams(stringA, stringB) {
  const parsedA = parseString(stringA);
  const parsedB = parseString(stringB);
  const characterSetA = generateCharacterSet(parsedA);
  const CharacterSetB = generateCharacterSet(parsedB);
  const difference = findDifference(characterSetA, CharacterSetB);
  const hasDifference = Object.keys(difference).length === 0;

  return hasDifference;
}

module.exports = anagrams;
