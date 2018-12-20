// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
const reverse = require('../reversestring/index.js');

// import and use previously written reverse method to find truth
// function palindrome(str) {
//   return str === reverse(str)
// }

// solve with array methods and compare truthness of each oposing character
function palindrome(str) {
  return str.split('').every((character, index) => {
    const oppisiteCharacter = str.length - index - 1;

    return character === str[oppisiteCharacter];
  })
}

module.exports = palindrome;
