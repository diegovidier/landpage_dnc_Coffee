const openModalLink = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const modalOverlay = document.getElementById('modalOverlay');

openModalLink.addEventListener('click', function (event) {
  event.preventDefault();
  modalOverlay.style.display = 'block';
});

closeModalButton.addEventListener('click', function () {
  modalOverlay.style.display = 'none';
});
