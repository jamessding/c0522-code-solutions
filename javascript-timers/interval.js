// query select for h1 element with class 'countdown-display' and assign to $message variable
// assign setInterval method with 2 parameters countdown function and 1000 to variable timerId
// define function countdown - if text content of $message is greater than 1, assign text content to be one less than previously
// else assign text content of $message to string '~Earth Beeeelooowww Us~' and clearInterval with parameter timerId

var $message = document.querySelector('.countdown-display');
var timerId = setInterval(countdown, 1000);
function countdown() {
  if ($message.textContent > 1) {
    $message.textContent = $message.textContent - 1;
  } else {
    $message.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timerId);
  }
}
