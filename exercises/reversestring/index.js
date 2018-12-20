// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Takes advantage of array methods.
function reverse(str) {
  return str.split('').reverse().join('')
}

// OTHER EXAMPLES OF COMPLETION:

// Utilizes reduce to itterate over the array and return a new reversed string.
// function reverse(str) {
//   return str.split('').reduce((reverse, character) => character + reverse, '')
// }

module.exports = reverse;
