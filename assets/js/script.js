const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});