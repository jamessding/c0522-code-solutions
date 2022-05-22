/* exported chunk */
// create an empty array named finalArr
// initialize variable counter with value 0
// for each value of i from 0 to length of array divided by size, add an empty array to the end of finalArr
// inside the first for loop, for each value of j from 0 to size, add value of array at i times size plus j to end of finalArr at i, increment counter
// if counter is strictly equal to length of array, break
// after both for loops conclude, return the value of finalArr
function chunk(array, size) {
  var finalArr = [];
  var counter = 0;
  for (var i = 0; i < array.length / size; i++) {
    finalArr.push([]);
    for (var j = 0; j < size; j++) {
      finalArr[i].push(array[i * size + j]);
      counter++;
      if (counter === array.length) {
        break;
      }
    }
  }
  return finalArr;
}
