/* exported filterOutNulls */
// create an empty array
// for each value of the values array from index 0 to the final index
// if values at current index is not equal to null,
// add that value to the end of the array arr
// return final array arr
function filterOutNulls(values) {
  var arr = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      arr.push(values[i]);
    }
  }
  return arr;
}
