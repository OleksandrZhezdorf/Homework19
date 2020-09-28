/* First variant */

xline.onmousedown = function (event) {

  let shiftY = event.clientY - xline.getBoundingClientRect().top;

  document.body.append(xline);

  moveAt(event.pageY);

  function moveAt(pageY) {
    xline.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);
};

//////

yline.onmousedown = function (event) {

  let shiftX = event.clientX - yline.getBoundingClientRect().left;


  document.body.append(yline);

  moveAt(event.pageX);

  function moveAt(pageX) {
    yline.style.left = pageX - shiftX + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX);
  }

  document.addEventListener('mousemove', onMouseMove);

}




