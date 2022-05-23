/* exported initial */
// create an empty array
// for each value in given array from index 0 to last index - 1
// add value at current index to end of empty array
// return final array after the loop concludes
function initial(array) {
  var result = [];
  for (var i = 0; i < array.length - 1; i++) {
    result.push(array[i]);
  }
  return result;
}
