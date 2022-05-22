/* exported lastChars */
/* exported firstChars */
// create an empty string
// for each value from index 0 to index length parameter
// if value of string at current index is truthy
// add value at current index to end of string result
// return result after loop concludes
function lastChars(length, string) {
  var result = '';
  for (var i = string.length - length; i < string.length; i++) {
    if (string[i]) {
      result += string[i];
    }
  }
  return result;
}
