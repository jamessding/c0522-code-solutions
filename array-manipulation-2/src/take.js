/* exported take */
// create an empty array
// if the length of the array isn't equal to 0
// for each value of array from index 0 to index count
// add the value of array at current index
// return final result
function take(array, count) {
  var result = [];
  if (array.length !== 0) {
    for (var i = 0; i < count; i++) {
      result.push(array[i]);
    }
  }
  return result;
}
