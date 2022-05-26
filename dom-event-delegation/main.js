var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', handleTask);

function handleTask(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var $taskListItem = document.querySelector('.task-list-item');
    console.log('closest .task-list-item', $taskListItem);
    $taskListItem.remove();
  }
}
