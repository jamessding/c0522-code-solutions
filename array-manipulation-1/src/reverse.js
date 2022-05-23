/* exported reverse */
// create an empty array
// for each value of array from the last index to the first index
// add the value of array at current index to the empty array
// return final array result after loop concludes
function reverse(array) {
  var result = [];
  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}
