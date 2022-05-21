/* exported findIndex */
// for each value of the array array from index 0 to final index
// if array at current index is strictly equal to value, return current index
// if value is not in index, return -1
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
