/* exported intersection */
// assign an empty array to variable result
// for each index i from 0 to first length,
// for each index k from 0 to second length,
// if first at i is strictly equal to second at k
// add first at i to end of result
// return result
function intersection(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    for (var k = 0; k < second.length; k++) {
      if (first[i] === second[k]) {
        result.push(first[i]);
      }
    }
  }
  return result;
}
