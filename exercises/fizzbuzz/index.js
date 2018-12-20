// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// conditionally check for remainder with modulo and log appropriate output
function fizzBuzz(n) {
  const count = [...Array(n).keys()].map(i => i + 1);

  for (number of count) {
    let numberToLog = number;
  
    if (number % 3 === 0) {
      numberToLog = 'fizz';
    };
  
    if (number % 5 === 0) {
      numberToLog = 'buzz';
    };
  
    if (number % 3 === 0 && number % 5 === 0) {
      numberToLog = 'fizzbuzz';
    }
    console.log(numberToLog);
  }
}

module.exports = fizzBuzz;
