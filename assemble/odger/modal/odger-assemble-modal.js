let modal = document.getElementById("modal");
let modalContent = document.getElementById("modal-content");
// let modalButton = document.getElementById("modal-image-button");

let span = document.getElementsByClassName("close")[0];

let show = function() {

  // let getHeight = function() {
  //   modal.style.display = 'block';
  //   let height = elem.scrollHeight + 'px';
  //   modal.style.display = '';
  //   return height;
  // }

  // let height = getHeight();
  modal.classList.add('is-visible');
  // modal.style.height = height;

  // window.setTimeout(function() {
  //   modal.style.height = '';
  // }, 350);
};


let hide = function() {
  // modal.style.height = elem.scrollHeight + 'px';

  window.setTimeout(function() {
    modal.style.height = '0';
  }, 1);

  window.setTimeout(function() {
    modal.classList.remove('is-visible');
  }, 350);
};

let toggle = function() {
  if (modal.classList.contains('is-visible')) {
    hide(modal);
    return;
  }

  show(modal);
};

function displayModal(content) {
  console.log("image clicked!");

  toggle();
};
// document.getElementById("footer-instruction").addEventListener('click', function (event) {
//   if (!event.target.classList.contains('toggle')) return;
//
//   event.preventDefault();
//
//   let content = document.querySelector(event.target.hash);
//   if (!content) return;
//
//   console.log("image clicked!");
//
//   toggle(content);
// }, false);

// function displayModal() {
//   console.log("MODAL DISPLAY!");
//   // modal.style.display = "block";
//   modal.classList.toggle("fade");
//   modalContent.classList.toggle("modal-content-active");
// }
//
// function closeModal () {
//   // modal.style.display = "none";
//   modal.classList.toggle("fade");
//   modalContent.classList.toggle("modal-content-active");
// }
//
// window.onclick = function(event) {
//   if (event.target == modal) {
//     // modal.style.display = "none";
//     modal.classList.toggle("fade");
//     modalContent.classList.toggle("modal-content-active");
//   }
// }
