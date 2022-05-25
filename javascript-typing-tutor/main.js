var i = 0;
var counter = 0;
var startTime;
var endTime;
var wordCounter = 1;
var $spansList = document.querySelectorAll('span');
var $accuracy = document.querySelector('.accuracy');
var $time = document.querySelector('.time');
var $wpm = document.querySelector('.wpm');
var $reset = document.querySelector('.reset');
startTime = new Date();
function handleKey(event) {
  if ($spansList[i].textContent === ' ') {
    wordCounter++;
  }
  if ($spansList[i].textContent === event.key) {
    $spansList[i].className = 'correct';
    if (i === $spansList.length - 1) {
      $accuracy.className = '';
      $accuracy.textContent += Math.round(($spansList.length - counter) / $spansList.length * 100) + '%';
      endTime = new Date();
      var timeDifference = (endTime - startTime) / 1000;
      $time.className = '';
      $time.textContent += Math.round(timeDifference) + ' seconds';
      $wpm.className = '';
      $wpm.textContent += Math.round(wordCounter / timeDifference * 60);
    }
    $spansList[i + 1].className = 'underline';
    i++;
  } else {
    $spansList[i].className = 'incorrect underline';
    counter++;
  }
}

function handleButton(event) {
  i = 0;
  counter = 0;
  wordCounter = 1;
  $accuracy.className = 'accuracy';
  $time.className = 'time';
  $wpm.className = 'wpm';
  $spansList[0].className = 'underline';
  for (var j = 1; j < $spansList.length; j++) {
    $spansList[j].className = '';
  }
}

window.addEventListener('keydown', handleKey);
$reset.addEventListener('click', handleButton);
