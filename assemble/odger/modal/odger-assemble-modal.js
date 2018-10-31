let modal = document.getElementById("modal");
let modalContent = document.getElementById("modal-content");
// let modalButton = document.getElementById("modal-image-button");

let span = document.getElementsByClassName("close")[0];

let showModal = function() {
  modal.classList.add('is-visible');
};

let hideModal = function() {
  modal.classList.remove('is-visible');
};
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('is-visible');
    }
}
