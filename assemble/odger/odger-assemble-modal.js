let modal = document.getElementById("modal");
let modalContent = document.getElementById("modalContent");
// let modalButton = document.getElementById("modal-image-button");

let span = document.getElementsByClassName("close")[0];

function displayModal() {
  console.log("MODAL DISPLAY!");
  // modal.style.display = "block";
  modal.classList.toggle("fade");
  modal.classList.toggle("modal-content");
}

function closeModal () {
  // modal.style.display = "none";
  modal.classList.toggle("fade");
}

window.onclick = function(event) {
  if (event.target == modal) {
    // modal.style.display = "none";
    modal.classList.toggle("fade");
  }
}
