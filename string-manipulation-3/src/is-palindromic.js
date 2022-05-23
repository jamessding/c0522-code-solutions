/* exported isPalindromic */
// create an empty counter variable
// remove all spaces from string
// for each value of string from index 0 to index (length of string divided by 2 rounded down)
// if string at current index is strictly equal to string at index of (length of string minus i minus 1), increment counter
// if counter is strictly equal to length of string divided by 2 rounded down, return true
// else return false
function isPalindromic(string) {
  var counter = 0;
  string = string.split(' ').join('');
  for (var i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] === string[string.length - i - 1]) {
      counter++;
    }
  }
  if (counter === Math.floor(string.length / 2)) {
    return true;
  } else {
    return false;
  }
}
