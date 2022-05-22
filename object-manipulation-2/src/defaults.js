/* exported defaults */
// for each property key in source object
// if property key is not found in target
// assign the value of the key property of source object to the key property of target object
// return final target object
function defaults(target, source) {
  for (var key in source) {
    if (key in target === false) { // target.hasOwnProperty(key);
      target[key] = source[key];
    }
  }
  return target;
}
