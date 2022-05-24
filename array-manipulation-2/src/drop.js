/* exported drop */
// create an empty array
// if the length of the array isn't equal to 0
// for each value of array from index count to final index
// add the value of array at current index
// return final result
function drop(array, count) {
  var result = [];
  if (array.length !== 0) {
    for (var i = count; i < array.length; i++) {
      result.push(array[i]);
    }
  }
  return result;
}
