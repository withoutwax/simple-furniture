let step;
let preloadImg;

window.onload = function() {
    console.log("stepsReady, ready");
    step = 1;

    initialize(step);
}


function drag(e) {
    console.log(step);
    let dragObject = document.getElementById(e.target.id);
    let infoElement = document.getElementById('info-drag-to-start');

    e.dataTransfer.setData("box", e.target.id);
    fadeOutAnim(infoElement);
    fadeOutAnim(document.getElementById("footer-content-instruction"))
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
