var i=0;
function expand(){
  if(i==0){
document.getElementById("menu").style.transform = "scale(3)";
   document.getElementById("plus").style.transform = "rotate(45deg)";
    i=1;
  }
  else{
    document.getElementById("menu").style.transform = "scale(0)";
    document.getElementById("plus").style.transform = "rotate(0deg)";
    i=0;
  }
}


// DRAGABLE MENU
//var dragValue;

//function move(id){
  //var element = document.getElementById("menu-container");
  //element.style.position = 'absolute';
  //element.onmousedown = function(){
    //dragValue = element;
  //}
//}
//document.onmouseup = function(e){
  //dragValue = null;
//}
//document.onmousemove = function(e){
  //var x = e.pageX;
  //var y = e.pageY;

  //dragValue.style.left = x + 'px';
  //dragValue.style.top = y + 'px';
//}

//Make the DIV element draggagle:
dragElement(document.getElementById("menu-container"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "plus")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "plus").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
