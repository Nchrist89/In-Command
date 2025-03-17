const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

let questionNum = 0;

//Fetch API Function
async function fetchQuestions() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple");
    data = await response.json();
    results = data.results;
    getQuestion();
}

// retrieve question function
function getQuestion() {
    let question = results[questionNum].question;
    const questionBox = document.getElementById("question-box");
    questionBox.innerText = question;
}















const nextQ = document.getElementById('next-btn');

nextQ.addEventListener('click', fetchQuestions());











