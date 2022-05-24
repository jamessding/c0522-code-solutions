// create counter equal to boolean true
// queryselect button element and assign it to variable $button
// queryselect main element and assign it to variable $background
// define function handleClick with parameter event
// assign value of not counter to counter
// if counter is strictly equal to true, assign button-dark to className of button object and assign background-dark to className of background object
// else if counter is strictly equal to false, assign button-light to className of button object and assign background-light to className of background object
// add event listener for $button object with arguments 'click and variable handleClick
var counter = true;
var $button = document.querySelector('button');
var $background = document.querySelector('main');
function handleClick(event) {
  counter = !counter;
  if (counter === true) {
    $button.className = 'button-dark';
    $background.className = 'background-dark';
  } else if (counter === false) {
    $button.className = 'button-light';
    $background.className = 'background-light';
  }
}
$button.addEventListener('click', handleClick);
