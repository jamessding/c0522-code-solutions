/* exported isAnagram */
// create a counter variable equal to 0
// remove spaces from both firstString and secondString and turn them into arrays
// for each value i from index 0 to final index of firstStringArr
// for each value j from index 0 to final index of secondStringArr
// if firstStringArr at current index i is strictly equal to secondStringArr at current index j
// assign value 0 to secondStringArr at current index j, increment counter, then break
// if counter is strictly equal to length of firstStringArr and length of firstStringArr is strictly equal to length of secondStringArr, return true
// else return false

function isAnagram(firstString, secondString) {
  var counter = 0;
  var firstStringArr = [];
  var secondStringArr = [];
  for (var i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstStringArr.push(firstString[i]);
    }
  }
  for (var j = secondString.length - 1; j >= 0; j--) {
    if (secondString[j] !== ' ') {
      secondStringArr.push(secondString[j]);
    }
  }
  for (var k = 0; k < firstStringArr.length; k++) {
    for (var l = 0; l < secondStringArr.length; l++) {
      if (firstStringArr[k] === secondStringArr[l]) {
        secondStringArr[l] = 0;
        counter++;
        break;
      }
    }
  }
  if (counter === firstStringArr.length && firstStringArr.length === secondStringArr.length) {
    return true;
  } else {
    return false;
  }
}
