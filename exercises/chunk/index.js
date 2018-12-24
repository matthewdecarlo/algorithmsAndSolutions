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

module.exports = chunk;
