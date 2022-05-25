/* exported invert */
// create empty object named result
// for each key in source object,
// assign current key to the value of source at key of the result object
// return final result object
function invert(source) {
  var result = {};
  for (var key in source) {
    result[source[key]] = key;
  }
  return result;
}
