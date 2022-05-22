/* exported pick */
// create an empty object named result
// for each value from index 0 to final index of keys
// for each property key in source object
// if keys at current index is strictly equal to current key and value of key of source is not undefined
// assign value of key of source to property key of result object
// return result after for loops conclude
function pick(source, keys) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (keys[i] === key && source[key] !== undefined) {
        result[key] = source[key];
      }
    }
  }
  return result;
}

/* pick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']) / / -> { foo: 1, baz: 3 }
i = 0 source = {foo: 1, bar: 2, baz: 3} keys = ['foo', 'baz']
if 'foo' ===

*/
