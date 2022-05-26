/* exported union */
function union(first, second) {
  var result = [];
  if (first[0] !== undefined) {
    result.push(first[0]);
  }
  for (var i = 1; i < first.length; i++) {
    var counter = 0;
    for (var k = 0; k < second.length; k++) {
      if (first[i] !== second[k]) {
        counter++;
      }
    }
    if (counter === second.length) {
      for (var l = 0; l < result.length; l++) {
        if (first[i] !== result[i]) {
          result.push(first[i]);
        }
      }
    }
  }
  for (var m = 0; m < second.length; m++) {
    var secondCounter = 0;
    for (var p = 0; p < first.length; p++) {
      if (second[m] !== first[i]) {
        secondCounter++;
      }
    }
    if (secondCounter === first.length) {
      result.push(second[m]);
    }
  }
  return result;
}
