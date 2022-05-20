/* exported getIndexes */
// create an empty array
// for each value in the given array from index 0 to the final index of the array
// add i to the end of array arr
// return the final array
function getIndexes(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.push(i);
  }
  return arr;
}
