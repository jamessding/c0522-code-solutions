var $form = document.getElementById('contact-form');
$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var messageData = {};
  messageData.name = $form.elements.name.value;
  messageData.email = $form.elements.email.value;
  messageData.message = $form.elements.message.value;
  console.log(messageData);
  $form.reset();
});
