/* exported ransomCase */
// create an empty string named result
// for each value from 0 to the length of string parameter
// if i is an odd number (the remainder of diving by 2 is not 0), concatenate result with character at current index uppercased
// else concatenate result with character at current index lowercased
// return final string result after loop iterates
function ransomCase(string) {
  var result = '';
  for (var i = 0; i < string.length; i++) {
    if ((i % 2) !== 0) {
      result += string.toUpperCase().charAt(i);
    } else {
      result += string.toLowerCase().charAt(i);
    }
  }
  return result;
}
