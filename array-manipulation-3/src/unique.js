/* exported unique */
// create an empty array named result
// if array at 0 is not undefined, add array at 0 to end of result
// for each index i from 1 to less than array length, assign 0 to variable counter
// for each index k from 0 to less than result length, if array at i is strictly not equal to result at k, increment counter
// if counter is strictly equal to result length, add array at i to end of result
// return result
function unique(array) {
  var result = [];
  if (array[0] !== undefined) {
    result.push(array[0]);
  }
  for (var i = 1; i < array.length; i++) {
    var counter = 0;
    for (var k = 0; k < result.length; k++) {
      if (array[i] !== result[k]) {
        counter++;
      }
    }
    if (counter === result.length) {
      result.push(array[i]);
    }
  }
  return result;
}
