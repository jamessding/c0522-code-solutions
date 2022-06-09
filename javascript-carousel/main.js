var $image = document.querySelector('img');
var $dots = document.querySelectorAll('.fa-circle');
var urlArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var urlArrayLength = urlArray.length;
var entryId = setInterval(nextImage, 3000);
var $transitionDiv = document.querySelector('.transition-div');
var timeouts = [];

function swapImage(event) {
  if (event.target.tagName !== 'I') {
    return;
  }
  var imageId = $image.getAttribute('data-id');
  if (event.target.className === 'fas fa-chevron-left fa-5x') {
    if (imageId === '0') {
      $image.setAttribute('data-id', urlArrayLength - 1);
      setTimeout(function () { $image.setAttribute('src', urlArray[urlArrayLength - 1]); }, 100);
      $dots[(urlArrayLength - 1).toString()].className = 'fas fa-circle fa-2x padding';
      $dots[0].className = 'far fa-circle fa-2x padding';
    } else {
      $image.setAttribute('data-id', Number(imageId) - 1);
      setTimeout(function () { $image.setAttribute('src', urlArray[Number(imageId) - 1]); }, 100);
      $dots[Number(imageId) - 1].className = 'fas fa-circle fa-2x padding';
      $dots[Number(imageId)].className = 'far fa-circle fa-2x padding';
    }
  } else if (event.target.className === 'fas fa-chevron-right fa-5x') {
    if (imageId === (urlArrayLength - 1).toString()) {
      $image.setAttribute('data-id', 0);
      setTimeout(function () { $image.setAttribute('src', urlArray[0]); }, 100);
      $dots[0].className = 'fas fa-circle fa-2x padding';
      $dots[(urlArrayLength - 1).toString()].className = 'far fa-circle fa-2x padding';
    } else {
      $image.setAttribute('data-id', Number(imageId) + 1);
      setTimeout(function () { $image.setAttribute('src', urlArray[Number(imageId) + 1]); }, 100);
      $dots[Number(imageId) + 1].className = 'fas fa-circle fa-2x padding';
      $dots[Number(imageId)].className = 'far fa-circle fa-2x padding';
    }
  } else {
    if (event.target.className === 'fas fa-circle fa-2x padding') {
      return;
    }
    for (var i = 0; i < $dots.length; i++) {
      if ($dots[i].className === 'fas fa-circle fa-2x padding') {
        $dots[i].className = 'far fa-circle fa-2x padding';
      } else if ($dots[i].getAttribute('data-id') === event.target.getAttribute('data-id')) {
        $dots[i].className = 'fas fa-circle fa-2x padding';
        $image.setAttribute('data-id', i);
        $image.setAttribute('src', urlArray[i]);
      }
    }
  }
}

function nextImage() {
  transitionRight();
  var imageId = $image.getAttribute('data-id');
  if (imageId === (urlArrayLength - 1).toString()) {
    $image.setAttribute('data-id', 0);
    $image.setAttribute('src', urlArray[0]);
    $dots[0].className = 'fas fa-circle fa-2x padding';
    $dots[(urlArrayLength - 1).toString()].className = 'far fa-circle fa-2x padding';
  } else {
    $image.setAttribute('data-id', Number(imageId) + 1);
    $image.setAttribute('src', urlArray[Number(imageId) + 1]);
    $dots[Number(imageId) + 1].className = 'fas fa-circle fa-2x padding';
    $dots[Number(imageId)].className = 'far fa-circle fa-2x padding';
  }
}

function transitionRight() {
  timeouts.push(setTimeout(function () { $transitionDiv.classList.add('transition-right'); }, 2700));
  timeouts.push(setTimeout(function () { $image.classList.add('position-right'); }, 3000));
  timeouts.push(setTimeout(function () { $transitionDiv.classList.remove('transition-right'); }, 3300));
  timeouts.push(setTimeout(function () { $image.classList.remove('position-right'); }, 3300));
}

function clearTimeouts() {
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
}

function transitionLeft() {
  timeouts.push(setTimeout(function () { $transitionDiv.classList.add('transition-left'); }, 0));
  timeouts.push(setTimeout(function () { $image.classList.add('position-left'); }, 100));
  timeouts.push(setTimeout(function () { $transitionDiv.classList.remove('transition-left'); }, 200));
  timeouts.push(setTimeout(function () { $image.classList.remove('position-left'); }, 200));
}

function transitionRightFast() {
  timeouts.push(setTimeout(function () { $transitionDiv.classList.add('transition-right-fast'); }, 0));
  timeouts.push(setTimeout(function () { $image.classList.add('position-right'); }, 100));
  timeouts.push(setTimeout(function () { $transitionDiv.classList.remove('transition-right-fast'); }, 200));
  timeouts.push(setTimeout(function () { $image.classList.remove('position-right'); }, 200));
}

transitionRight();
document.addEventListener('click', swapImage);
document.addEventListener('click', function (event) {
  clearInterval(entryId);
  clearTimeouts();
  if (event.target.className === 'fas fa-chevron-left fa-5x') {
    transitionLeft();
  } else if (event.target.className === 'fas fa-chevron-right fa-5x') {
    transitionRightFast();
  }
  setTimeout(entryId = setInterval(nextImage, 3000), 3000);
  transitionRight();
});
