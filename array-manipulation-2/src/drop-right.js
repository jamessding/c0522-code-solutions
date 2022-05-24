/* exported dropRight */
// create an empty array named result
// if count is greater than the length of array, return shallow copy of array
// for each value from index of length of array minus count to final index
// add the value of array at current index to end of result array
// return result after for loops concludes
function dropRight(array, count) {
  var result = [];
  for (var i = 0; i < array.length - count; i++) {
    result.push(array[i]);
  }
  return result;
}
