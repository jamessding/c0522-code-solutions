var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

function handleTab(event) {
  if (!event.target.matches('.tab')) { // guard
    return;
  }
  for (var i = 0; i < $tabList.length; i++) {
    if ($tabList[i] === event.target) {
      $tabList[i].className = 'tab active';
    } else {
      $tabList[i].className = 'tab';
    }
  }
  var viewValue = event.target.getAttribute('data-view');
  for (var j = 0; j < $viewList.length; j++) {
    if ($viewList[j].getAttribute('data-view') !== viewValue) {
      $viewList[j].className += viewValue + ' hidden view';
    } else {
      $viewList[j].className = viewValue + ' view';
    }
  }
}

$tabContainer.addEventListener('click', handleTab);
