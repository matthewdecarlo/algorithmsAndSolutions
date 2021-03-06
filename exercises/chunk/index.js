// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// add solution using reduce with conditionals
function chunk(array, size) {
  return array.reduce((chunks, value) => {
    const length = chunks.length;
    const isEmpty = length === 0;
    
    if (isEmpty) return [[value]];
    
    const currentChunk = chunks[length - 1];
    const isSmallerThanSize = currentChunk.length < size;
    
    if (isSmallerThanSize) {
      currentChunk.push(value)
      
      return chunks;
    }
    else {
      chunks.push([value]);
    }

    return chunks;
  }, [])
}

// add method solving with splice
// function chunk(array, size) {
//   const chunks = [];

//   while (array.length) {
//     chunks.push(array.splice(0, size))
//   }

//   return chunks;
// }

// add method solving with for loop & slice
// function chunk(array, size) {
//   const chunks = [];

//   for (index = 0, length = array.length; index < length; index += size) {
//     chunks.push(array.slice(index, index + size));
//   }

//   return chunks;
// }

// add method solving with while & slice
// function chunk(array, size) {
//   const chunks = [];
//   let index = 0;

//   while(index < array.length) {
//     chunks.push(array.slice(index, index + size));
//     index = index + size;
//   }

//   return chunks;
// }

module.exports = chunk;
