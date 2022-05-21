/* exported tail */
// create an empty array
// for each value in given array from index 1 to last index
// add value at current index to end of empty array
// return final array after the loop concludes
function tail(array) {
  var result = [];
  for (var i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
