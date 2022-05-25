/* exported unique */
function unique(array) {
  var result = [];
  result.push(array[0]);
  for (var i = 1; i < array.length; i++) {
    for (var k = 0; k < result.length; k++) {
      if (array[i] !== result[k]) {
        result.push(array[i]);
        break;
      }
    }
  }
  return result;
}
