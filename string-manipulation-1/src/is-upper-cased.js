/* exported isUpperCased */
// for all letters of the string word
// return false if any letter is lowercase
// return true after entire loop iterates without returning false
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
