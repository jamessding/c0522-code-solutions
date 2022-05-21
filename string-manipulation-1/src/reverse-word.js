/* exported reverseWord */
// create an empty array
// for each character in the string word
// add the character at current index to the beginning of the empty string
// join the characters in the array into a string and return the final string
function reverseWord(word) {
  var reverse = [];
  for (var i = 0; i < word.length; i++) {
    reverse.unshift(word[i]);
  }
  return reverse.join('');
}
