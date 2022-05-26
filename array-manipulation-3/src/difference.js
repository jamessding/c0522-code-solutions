/* exported difference */
// create an empty array named result
// for each index i from 0 to first length, assign 0 to variable counter
// for each index k from 0 to second length, if first at i is strictly equal to second at k, increment counter
// if counter is strictly equal to second length, add first at i to end of result
// for each index l from 0 to second length, assign 0 to variable counter
// for each index m from 0 to first length, if second at l is strictly equal to first at m, increment count
// if counter is strictly equal to first length, add second at l to end of result
function difference(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    var counter = 0;
    for (var k = 0; k < second.length; k++) {
      if (first[i] !== second[k]) {
        counter++;
      }
    }
    if (counter === second.length) {
      result.push(first[i]);
    }
  }
  for (var l = 0; l < second.length; l++) {
    var count = 0;
    for (var m = 0; m < first.length; m++) {
      if (second[l] !== first[m]) {
        count++;
      }
    }
    if (count === first.length) {
      result.push(second[l]);
    }
  }
  return result;
}
