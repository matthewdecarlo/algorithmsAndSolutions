// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// use prior defined reverse method and utilze sign to maintain the sign state.
const reverse = require('../reversestring/index.js');

function reverseInt(n) {
  return Math.sign(n) * parseInt(reverse(n.toString()));
}

module.exports = reverseInt;
