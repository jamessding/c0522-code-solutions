/* exported compact */
// create an empty array
// for each value in given array from the first index to the last index
// if value at current index is truthy, add that value to end of empty array
// return final array result after loop concludes
function compact(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }
  return result;
}
