/* exported isPalindromic */
// create an empty counter variable
// remove all spaces from string
// for each value of string from index 0 to index (length of string divided by 2 rounded down)
// if string at current index is strictly equal to string at index of (length of string minus i minus 1), increment counter
// if counter is strictly equal to length of string divided by 2 rounded down, return true
// else return false
function isPalindromic(string) {
  var counter = 0;
  var stringArr = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      stringArr.push(string[i]);
    }
  }
  for (var j = 0; j < Math.floor(stringArr.length / 2); j++) {
    if (stringArr[j] === stringArr[stringArr.length - j - 1]) {
      counter++;
    }
  }
  if (counter === Math.floor(stringArr.length / 2)) {
    return true;
  } else {
    return false;
  }
}
