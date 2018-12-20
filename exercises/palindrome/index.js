// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// import and use previously written reverse method to find truth
// const reverse = require('../reversestring/index.js');

// function palindrome(str) {
//   return str === reverse(str)
// }

// solve with array methods and compare truthness of each oposing character
// update solution to break all items have been compared; rather than wait
// for entire 'every' operation to iterate over the array.
function isOdd(number) {
  return number % 2;
}

function dissectString(string) {
  const length = string.length;
  const halfLength = Math.floor(length / 2);
  const isLengthOdd = isOdd(length);
  let stringArray = string.split('');

  if (isLengthOdd) {
    const front = stringArray.splice(0, halfLength);
    const end = stringArray.slice(1, halfLength + 1);
    return { front, end };
  }
  
  return {
    front: stringArray.splice(0, halfLength),
    end: stringArray };
}

function palindrome(string) {
  const dissectedString = dissectString(string);
  const front = dissectedString.front;

  return front.every((character, index) => {
    const oppisiteCharacter = front.length - index - 1;

    return character === dissectedString.end[oppisiteCharacter];
  })
}

module.exports = palindrome;
