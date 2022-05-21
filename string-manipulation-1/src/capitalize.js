/* exported capitalize */
// change all letters in words string to lowercase
// slice the first letter and uppercase it
// return uppercased letter + the rest of the word
function capitalize(word) {
  word = word.toLowerCase();
  var uppercase = word.slice(0, 1).toUpperCase();
  return uppercase + word.substring(1);
}
