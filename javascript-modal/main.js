// create a counter equal to boolean true
// queryselect element with class button-modal and assign it to variable $buttonModal
// queryselect element with class button-no and assign it to variable $buttonNo
// queryselect element with class off-container and assign it to variable $container
// define function named handleClick with parameter event
// assign the value of not counter to counter
// if counter is strictly equal to false, assign on-container to className of container object
// else if counter is strictly equal to true, assign off-container to className of container object
// add event listener for object $buttonModal with 2 arguments 'click' and Handleclick variable
// add event listener for object $buttonNo with 2 arguments 'click' and Handleclick variable
var counter = true;
var $buttonModal = document.querySelector('.button-modal');
var $buttonNo = document.querySelector('.button-no');
var $container = document.querySelector('.off-container');
function handleClick(event) {
  counter = !counter;
  if (counter === false) {
    $container.className = 'on-container';
  } else if (counter === true) {
    $container.className = 'off-container';
  }
}

$buttonModal.addEventListener('click', handleClick);
$buttonNo.addEventListener('click', handleClick);
