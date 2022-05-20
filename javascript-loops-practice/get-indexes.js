/* exported getIndexes */
// create an empty array
// for each value in the given array from index 0 to the final index of the array
// assign the current index value to the empty array at current index
// return the final array
function getIndexes(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr[i] = i;
  }
  return arr;
}
