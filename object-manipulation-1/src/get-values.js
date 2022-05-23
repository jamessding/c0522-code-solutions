/* exported getValues */
// create an empty array
// for each key in object
// add the property key's value to the end of the empty array
// return the final array result once the loop concludes
function getValues(object) {
  var result = [];
  for (var key in object) {
    result.push(object[key]);
  }
  return result;
}
