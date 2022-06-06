/* exported equal */
// initialize counter variable with value 0
// for each index i from 0 to first length, if first at i is strictly not equal to second at i,
// return false
// increment counter
// if counter is strictly equal to first length and second length,
// return true
// else return false
function equal(first, second) {
  var counter = 0;
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
    counter++;
  }
  if (counter === first.length && counter === second.length) {
    return true;
  } else {
    return false;
  }
}
