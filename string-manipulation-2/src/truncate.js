/* exported truncate */
// create an empty string
// for each value from 0 to length parameter
// if value of string at i is truthy
// concatenate string at i to string result
// return result appended with an ellipsis
function truncate(length, string) {
  var result = '';
  for (var i = 0; i < length; i++) {
    if (string[i]) {
      result += string[i];
    }
  }
  return result + '...';
}
