let modal = document.getElementById("modal");
let modalContent = document.getElementById("modal-content");
// let modalButton = document.getElementById("modal-image-button");

let span = document.getElementsByClassName("close")[0];

let showModal = function() {

    modal.style.display = "block";
    // alert('get ready');
    setTimeout(() => {
        modal.classList.add('is-visible');
    }, 100);

};

let removeModal = () => {
    modal.classList.remove('is-visible');
    setTimeout(() => {
        modal.style.display = "none";
    }, 1000);
}

let hideModal = function() {
    removeModal();
};

window.onclick = function(event) {
    if (event.target == modal) {
        removeModal();
    }
}
