/* exported zip */
// assign empty array to variable finalArr
// if first length is less than or equal to second length,, for each index i from 0 to less than first length, add empty array to end of finalArr
// else for each index j from 0 to less than second.length, add an array to end of finalArr
// for each index k from 0 to less than finalArr length, assign array literal of first at k and second at k to finalArr at k
// return finalArr
function zip(first, second) {
  var finalArr = [];
  if (first.length <= second.length) {
    for (var i = 0; i < first.length; i++) {
      finalArr.push([]);
    }
  } else {
    for (var j = 0; j < second.length; j++) {
      finalArr.push([]);
    }
  }
  for (var k = 0; k < finalArr.length; k++) {
    finalArr[k] = [first[k], second[k]];
  }
  return finalArr;
}
