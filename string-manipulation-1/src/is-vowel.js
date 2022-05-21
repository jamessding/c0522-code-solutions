/* exported isVowel */
// if string char is a vowel, uppercase or lowercase, return true
// else return false
function isVowel(char) {
  if (char.toUpperCase() === 'A' || char.toUpperCase() === 'E' || char.toUpperCase() === 'I' || char.toUpperCase() === 'O' || char.toUpperCase() === 'U') {
    return true;
  } else {
    return false;
  }
}
