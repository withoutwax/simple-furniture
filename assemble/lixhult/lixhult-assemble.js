let step;

window.onload = function() {
    console.log("stepsReady, ready");
    step = 1;
    initialize(step);
}



function drag(e) {

  let dragObject = document.getElementById(e.target.id);
  let infoElement = document.getElementById('info-drag-to-start');

  e.dataTransfer.setData("box", e.target.id);
  fadeOutAnim(infoElement);
}


// WHEN THE CURSOR IS DROPPED!
function drop(e) {
  e.preventDefault();
  let data = e.dataTransfer.getData("box");
  e.target.appendChild(document.getElementById(data));

  if (data == 'box_01') {
      // ADD CLASS FOR GIF-ANIMATION
      document.body.classList.add('background-gif');

    // DETECTING WHEN ANIMATION ENDS
    let backgroundAnimation = document.body;
    backgroundAnimation.addEventListener('animationend',
     (event) => {
       console.log(event);
        alert( "Finished transition!" );

        // REMOVE CLASS FOR GIF-ANIMATION. PREARE FOR NEXT STEP.
        document.body.classList.remove('background-gif');
     }, false );

  } else if (data == 'box_02') {
    console.log('For future reference');
  }
}







function fadeOutAnim(id) {
  console.log('infoElement is ready to be disappeared!');
  // this.classList.remove('first');
  id.classList.add('hide-fade');
}
function goneAwayAnim(id) {

  console.log('element is ready to be gone(forever)!');

  id.classList.add('hide-gone');
}
