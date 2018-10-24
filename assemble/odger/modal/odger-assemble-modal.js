let modal = document.getElementById("modal");
let modalContent = document.getElementById("modal-content");
// let modalButton = document.getElementById("modal-image-button");

let span = document.getElementsByClassName("close")[0];

function displayModal() {
  console.log("MODAL DISPLAY!");
  // modal.style.display = "block";
  modal.classList.toggle("fade");
  modalContent.classList.toggle("modal-content-active");
}

function closeModal () {
  // modal.style.display = "none";
  modal.classList.toggle("fade");
  modalContent.classList.toggle("modal-content-active");
}

window.onclick = function(event) {
  if (event.target == modal) {
    // modal.style.display = "none";
    modal.classList.toggle("fade");
    modalContent.classList.toggle("modal-content-active");
  }
}
