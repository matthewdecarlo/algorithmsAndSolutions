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

// Uses a loop to itterate over the array and return a new reversed string.
// function reverse(str) {
//   let reversed = ''

//   for (character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

module.exports = reverse;
