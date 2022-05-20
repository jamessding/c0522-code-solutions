/* exported filterOutStrings */
// create an empty array
// for each value of values array from index 0 to final index
// if the type of values at current index is not equal to a string,
// add that value to the end of the array arr
// return the final array arr
function filterOutStrings(values) {
  var arr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      arr.push(values[i]);
    }
  }
  return arr;
}
