/* exported union */
// create an empty array named result
// for each index k from 0 to first length, add first at k to end of result
// for each index i from 0 to second length, initialize counter with value 0
// for each index j from 0 to first length, if second at i is strictly not equal to first at j, increment counter
// if counter is strictly equal to first length, add second at i to end of result
// return result
function union(first, second) {
  var result = [];
  for (var k = 0; k < first.length; k++) {
    result.push(first[k]);
  }
  for (var i = 0; i < second.length; i++) {
    var counter = 0;
    for (var j = 0; j < first.length; j++) {
      if (second[i] !== first[j]) {
        counter++;
      }
    }
    if (counter === first.length) {
      result.push(second[i]);
    }
  }
  return result;
}
