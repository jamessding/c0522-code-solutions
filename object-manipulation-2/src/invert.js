/* exported invert */
// create empty object named result
// create empty array named keys
// create an empty array named values
// for each key in source object, add key to the end of keys array and add value of key to the end of values array
// for each value from index 0 to final index of keys array
// assign value of keys at current index to property values at current index of result object
// return final result object
function invert(source) {
  var result = {};
  var keys = [];
  var values = [];
  for (var key in source) {
    keys.push(key);
    values.push(source[key]);
  }
  for (var i = 0; i < keys.length; i++) {
    result[values[i]] = keys[i];
  }
  return result;
}
