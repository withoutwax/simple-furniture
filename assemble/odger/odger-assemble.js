let step;
let preloadImg;
let root = document.documentElement;

window.onload = function() {
    console.log("Images, ready");
    step = 1;
    initialize(step);
}


function drag(e) {
    console.log(step);
    let dragObject = document.getElementById(e.target.id);

    // dragElement(dragObject);

    let infoElement = document.getElementById('info-drag-to-start');

    // set the element's new position:

    e.dataTransfer.setData("box", e.target.id);
    fadeOutAnim(infoElement);
    fadeOutAnim(document.getElementById("footer-content-instruction"));
}


// DRAG RESTRICTION NOT WORKING
function dragElement(elmnt) {
    console.log('Configuring position of the drag');
    elmnt = document.getElementById(event.target.id);
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // console.log('element', elmnt);

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        console.log('dragMouseDown!');
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;

        console.log(pos3, pos4);
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        console.log('Dragging the element!')
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        console.log(pos3, pos4);
        // set the element's new position:
        // elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        // elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        console.log('elmnt.style.left', elmnt.style.left);
    }
    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}






// WHEN THE CURSOR IS DROPPED!
function drop(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData("box");
    e.target.appendChild(document.getElementById(data));

    // ANIMATION BETWEEN STEPS
    autoAnimation(data);
    fadeOutAnim(document.getElementById("content-steps"));
}

function fadeOutAnim(id) {
  id.classList.add('hide-fade');
  id.classList.remove('appear-fade');
}

function goneAwayAnim(id) {

  console.log('element is ready to be gone(forever)!');

  id.classList.add('hide-gone');
}

function appearAgainAnim(id) {
    id.classList.add('appear-fade');
    id.classList.remove('hide-fade');
}
