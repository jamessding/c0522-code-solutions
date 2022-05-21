/* exported getKeys */
// create an empty array
// for each key in object
// add the property key to the end of the empty array
// return the final array result once the loop concludes
function getKeys(object) {
  var result = [];
  for (var key in object) {
    result.push(key);
  }
  return result;
}
