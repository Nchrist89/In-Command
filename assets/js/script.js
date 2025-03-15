const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

let questionNo = 0;
let data = [];
let content = {}

const apiR = document.getElementById("requestAPI");
apiR.addEventListener('click', requestAPI)

const api_url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple'

async function requestAPI() {
    const response = await fetch(api_url)
    const data = await response.json();
    const results = data.results;

    console.log(results);
}











