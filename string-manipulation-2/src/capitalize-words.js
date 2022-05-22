/* exported capitalizeWords */
// create an array resultArr and assign its value to the string parameter lowercased and split into separate strings
// for each value from index 0 to length of resultArr
// assign the value of resultArr at current index with the first character uppercased to resultArr at current index
// after the loop concludes, return resultArr with it's string values combined with spaces in between
function capitalizeWords(string) {
  var resultArr = string.toLowerCase().split(' ');
  for (var i = 0; i < resultArr.length; i++) {
    resultArr[i] = resultArr[i].toUpperCase().charAt(0) + resultArr[i].substring(1);
  }
  return resultArr.join(' ');
}
