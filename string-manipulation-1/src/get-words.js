/* exported getWords */
// create an empty array
// if string is not empty, split the array into strings separated by spaces and assign the strings to the empty array
// else return the empty array
function getWords(string) {
  var arr = [];
  if (string !== '') {
    arr = string.split(' ');
    return arr;
  } else {
    return arr;
  }
}
