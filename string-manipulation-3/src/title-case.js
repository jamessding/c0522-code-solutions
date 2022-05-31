/* exported titleCase */
// create an array resultArr and assign its value to the string parameter lowercased and split into separate strings
// for each value from index 0 to length of resultArr
// if resultArr at index i is strictly equal to javascript string, assign JavaScript string to resultArr at index i
// else if resultArr at index i is strictly equal to api string, assign API string to resultArr at index i
// else if resultArr at index i includes a hyphen, split the string by it's hyphen and capitalize the string at index 1, then join the two strings and assign value to resultArr at i
// assign capitalized version of resultArr at i to resultArr at i
// if current index is not 0 and last character of previous string is not a hyphen and resultArr at i is strictly equal to one of the minor words, then lowercase resultArr at i
// return resultArr after joining it's string values with a space
function titleCase(title) {
  var resultArr = title.toLowerCase().split(' ');
  for (var i = 0; i < resultArr.length; i++) {
    if (resultArr[i] === 'javascript') {
      resultArr[i] = 'JavaScript';
    } else if (resultArr[i] === 'javascript:') {
      resultArr[i] = 'JavaScript:';
    } else if (resultArr[i] === 'api') {
      resultArr[i] = 'API';
    } else if (resultArr[i].includes('-')) {
      var splitArr = resultArr[i].split('-');
      splitArr[1] = splitArr[1].toUpperCase().charAt(0) + splitArr[1].substring(1);
      resultArr[i] = splitArr.join('-');
    }
    resultArr[i] = resultArr[i].toUpperCase().charAt(0) + resultArr[i].substring(1);
    if (i !== 0 && resultArr[i - 1][(resultArr[i - 1].length - 1)] !== ':' && (resultArr[i] === 'And' || resultArr[i] === 'Or' || resultArr[i] === 'Nor' || resultArr[i] === 'But' || resultArr[i] === 'A' || resultArr[i] === 'An' || resultArr[i] === 'The' || resultArr[i] === 'As' || resultArr[i] === 'At' || resultArr[i] === 'By' || resultArr[i] === 'For' || resultArr[i] === 'In' || resultArr[i] === 'Of' || resultArr[i] === 'On' || resultArr[i] === 'Per' || resultArr[i] === 'To')) {
      resultArr[i] = resultArr[i].toLowerCase();
    }
  }
  return resultArr.join(' ');
}
