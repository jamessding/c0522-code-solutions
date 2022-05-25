/* exported omit */
// create an empty object named result
// initialize a counter variable equal to 0
// for each property key in source object
// if keys at current counter is strictly not equal to current key and value of key of source is not undefined
// assign value of key of source to property key of result object and increment counter
// return result after for loops conclude
function omit(source, keys) {
  var result = {};
  var counter = 0;
  for (var key in source) {
    if (keys[counter] !== key && source[key] !== undefined) {
      result[key] = source[key];
      counter++;
    }
  }
  return result;
}
