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
// refactor by update to conditionally append and start to DRY up code
// refactor apply DRY methodology by writing reusable methods
function isMultipleOf(multiple, number) {
  return number % multiple === 0
}

function fizzBuzz(n) {
  const count = [...Array(n).keys()].map(i => i + 1);
  const fizz = 'fizz';
  const buzz = 'buzz';

  for (number of count) {
    let numberToLog = number;
  
    if (isMultipleOf(3, number)) {
      numberToLog = fizz;
    };
  
    if (isMultipleOf(5, number)) {
      if (Number.isInteger(numberToLog)) {
        numberToLog = buzz;
      }
      else {
        numberToLog += buzz;
      }
    };
    
    console.log(numberToLog);
  }
}

module.exports = fizzBuzz;
