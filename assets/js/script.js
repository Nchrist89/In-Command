const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

fetch("https://opentdb.com/api.php?amount=15&category=18&difficulty=medium&type=multiple")
    .then(response => response.text())
    .then(data => {
        document.getElementById("content").innerText = data.question;
    })
