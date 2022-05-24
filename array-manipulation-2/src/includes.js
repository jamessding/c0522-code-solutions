/* exported includes */
// for each value from index 0 to final index
// if array at current index is strictly equal to value parameter, return true
// return false if the for loop concludes without returning true
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
