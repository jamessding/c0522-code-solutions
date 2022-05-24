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
