// query select for h1 element with class 'message' in html
// define a function updateMessage to assign string 'Hello There' to text content property of $message dom object
// call setTimeout function with parameter updateMessage and 2000 for 2 seconds

var $message = document.querySelector('.message');

function updateMessage() {
  $message.textContent = 'Hello There';
}

setTimeout(updateMessage, 2000);
