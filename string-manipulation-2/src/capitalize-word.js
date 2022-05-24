/* exported capitalizeWord */
// if lowercased version of word is javascript, return JavaScript
// else return word with the first character uppercase and the rest of the characters lowercase
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    return word.toUpperCase().charAt(0) + word.toLowerCase().substring(1, word.length);
  }
}
