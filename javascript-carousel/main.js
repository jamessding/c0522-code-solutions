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
  var imageId = Number($image.getAttribute('data-id'));
  if (event.target.className === 'fas fa-chevron-left fa-5x') {
    if (imageId === 0) {
      changeImage(urlArrayLength - 1);
    } else {
      changeImage(imageId - 1);
    }
  } else if (event.target.className === 'fas fa-chevron-right fa-5x') {
    if (imageId === (urlArrayLength - 1)) {
      changeImage(0);
    } else {
      changeImage(imageId + 1);

    }
  } else {
    if (event.target.className === 'fas fa-circle fa-2x padding') {
      return;
    }
    var iconId = Number(event.target.getAttribute('data-id'));
    changeImage(iconId);
  }
}

function changeImage(index) {
  $image.setAttribute('data-id', index);
  setTimeout(setAttribute, 100, index);
  for (var i = 0; i < $dots.length; i++) {
    $dots[i].className = $dots[i].className = 'far fa-circle fa-2x padding';
  }
  $dots[index].className = 'fas fa-circle fa-2x padding';
}

function setAttribute(index) {
  $image.setAttribute('src', urlArray[index]);
}

function nextImage() {
  transitionRight();
  var imageId = Number($image.getAttribute('data-id'));
  if (imageId === (urlArrayLength - 1)) {
    $image.setAttribute('data-id', 0);
    $image.setAttribute('src', urlArray[0]);
    $dots[0].className = 'fas fa-circle fa-2x padding';
    $dots[(urlArrayLength - 1)].className = 'far fa-circle fa-2x padding';
  } else {
    $image.setAttribute('data-id', imageId + 1);
    $image.setAttribute('src', urlArray[imageId + 1]);
    $dots[imageId + 1].className = 'fas fa-circle fa-2x padding';
    $dots[imageId].className = 'far fa-circle fa-2x padding';
  }
}

function transitionRight() {
  timeouts.push(setTimeout(addRightTransition, 2700));
  timeouts.push(setTimeout(addRightPosition, 3000));
  timeouts.push(setTimeout(removeRightTransition, 3300));
  timeouts.push(setTimeout(removeRightPosition, 3300));
}

function clearTimeouts() {
  for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
  }
}

function transitionLeft() {
  timeouts.push(setTimeout(addLeftTransition, 0));
  timeouts.push(setTimeout(addLeftPosition, 100));
  timeouts.push(setTimeout(removeLeftTransition, 200));
  timeouts.push(setTimeout(removeLeftPosition, 200));
}

function transitionRightFast() {
  timeouts.push(setTimeout(addRightTransitionFast, 0));
  timeouts.push(setTimeout(addRightPosition, 100));
  timeouts.push(setTimeout(removeRightTransitionFast, 200));
  timeouts.push(setTimeout(removeRightPosition, 200));
}

function addRightTransition() { $transitionDiv.classList.add('transition-right'); }

function addRightPosition() { $image.classList.add('position-right'); }

function removeRightTransition() { $transitionDiv.classList.remove('transition-right'); }

function removeRightPosition() { $image.classList.remove('position-right'); }

function addLeftTransition() { $transitionDiv.classList.add('transition-left'); }

function addLeftPosition() { $image.classList.add('position-left'); }

function removeLeftTransition() { $transitionDiv.classList.remove('transition-left'); }

function removeLeftPosition() { $image.classList.remove('position-left'); }

function addRightTransitionFast() { $transitionDiv.classList.add('transition-right-fast'); }

function removeRightTransitionFast() { $transitionDiv.classList.remove('transition-right-fast'); }

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
