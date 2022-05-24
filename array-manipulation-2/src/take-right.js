/* exported takeRight */
// create an empty array named result
// if count is greater than the length of array, return shallow copy of array
// for each value from index of length of array minus count to final index
// add the value of array at current index to end of result array
// return result after for loops concludes
function takeRight(array, count) {
  var result = [];
  if (count > array.length) {
    return array.slice();
  }
  for (var i = array.length - count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
