/* exported isLowerCased */
// for each letter in the string word
// if the letter is equal to that letter uppercased and it's not a hyphen, return false
// return true if entire loop iterates without a return
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase() && word[i] !== '-') {
      return false;
    }
  }
  return true;
}
