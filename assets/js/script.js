const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

let data = {};
let questionNum = 0;
let questionBox = document.getElementById("question-box");

easydiff.addEventListener('click', fetchQuestions());

//API URLS
const easyQuiz = "https://opentdb.com/api.php?amount=15&category=18&difficulty=easy&type=multiple";
let apiAddress;

//Fetch API Function
async function fetchQuestions () {
    const response = await fetch(apiAddress);
    data = await response.json();
    getQuestion(data);
}

// retrieve question function
function getQuestion () {
    let results = data.results[questionNum];

    questionBox.innerHTML = results.question;

}

//difficulty
const easydiff = document.getElementById("easy-diff");




























