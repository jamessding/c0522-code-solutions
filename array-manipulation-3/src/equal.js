/* exported equal */
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
