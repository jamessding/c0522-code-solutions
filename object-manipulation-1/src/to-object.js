/* exported toObject */
// create an empty object named result
// assign the value of keyValuePair at index 1 to the result object's keyValuePair at index 0
// return the final object result
function toObject(keyValuePair) {
  var result = {};
  result[keyValuePair[0]] = keyValuePair[1];
  return result;
}
