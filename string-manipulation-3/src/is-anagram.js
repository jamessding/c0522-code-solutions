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
  var firstStringArr = firstString.split(' ').join('').split('');
  var secondStringArr = secondString.split(' ').join('').split('');
  for (var i = 0; i < firstStringArr.length; i++) {
    for (var j = 0; j < secondStringArr.length; j++) {
      if (firstStringArr[i] === secondStringArr[j]) {
        secondStringArr[j] = 0;
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
