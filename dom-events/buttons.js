function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
var $clickbutton = document.querySelector('.click-button');
$clickbutton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
var $mouseoverbutton = document.querySelector('.hover-button');
$mouseoverbutton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}
var $doubleclickbutton = document.querySelector('.double-click-button');
$doubleclickbutton.addEventListener('dblclick', handleDoubleClick);
