/* create a variable counter equal to 0
assign the querySelector method of the document object with argument .hotbutton to variable $hotbutton
assign the querySelector method of the document object with argument .click-count to variable $clickcount
define a function named handleClick with one parameter event
increment counter, assign string 'Clicks' plus the value of counter to the text content of $clickcount
if counter is less than 4, assign hot-button cold as the class name of $hotbutton
else if counter is less than 7, assign hot-button cool as the class name of $hotbutton
else if counter is less than 10, assign hot-button tepid as the class name of $hotbutton
else if counter is less than 13, assign hot-button warm as the class name of $hotbutton
else if counter is less than 16, assign hot-button hot as the class name of $hotbutton
else assign hot-button nuclear as the class name of $hotbutton
call the addEventListener method of the $hotbutton object with two arguments, the string click and the variable handleClick
*/
var counter = 0;
var $hotbutton = document.querySelector('.hot-button');
var $clickcount = document.querySelector('.click-count');
function handleClick(event) {
  counter++;
  $clickcount.textContent = 'Clicks: ' + counter;
  if (counter < 4) {
    $hotbutton.className = 'hot-button cold';
  } else if (counter < 7) {
    $hotbutton.className = 'hot-button cool';
  } else if (counter < 10) {
    $hotbutton.className = 'hot-button tepid';
  } else if (counter < 13) {
    $hotbutton.className = 'hot-button warm';
  } else if (counter < 16) {
    $hotbutton.className = 'hot-button hot';
  } else {
    $hotbutton.className = 'hot-button nuclear';
  }
}
$hotbutton.addEventListener('click', handleClick);
