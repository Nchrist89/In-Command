const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

let data;
let questionNum = 0;

const counter = document.getElementById("question-num"); // Corrected variable name

const next = document.getElementById("next-btn");
const QGet = document.getElementById("Q-get");

const answer1 = document.getElementById("answer-1");
const answer2 = document.getElementById("answer-2");
const answer3 = document.getElementById("answer-3");
const answer4 = document.getElementById("answer-4");

let currentQuestion;
let correctAns;
let incorrectAns;
let allAns;



//Fetch API Function
async function fetchQuestions() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        data = await response.json(); // Assign the data
        getQuestion(); // Call getQuestion after data is fetched
    } catch (error) {
        console.error('Error fetching questions:', error);
    }

}

//retrieve question function
function getQuestion() {
    if (questionNum <= 14) { //Checks current question and proceeds if not reached 15;
        currentQuestion = data.results[questionNum];
        const questionBox = document.getElementById("question-box");
        questionBox.innerHTML = `${currentQuestion.question}`;
        answerDealer();
    }
}

function answerDealer() {
    correctAns = currentQuestion.correct_answer;
    incorrectAns = currentQuestion.incorrect_answers;
    allAns = [...incorrectAns, correctAns];
    console.log(allAns);
    shuffleAns(allAns);

    answer1.innerHTML = `${allAns[0]}`;
    answer2.innerHTML = `${allAns[1]}`;
    answer3.innerHTML = `${allAns[2]}`;
    answer4.innerHTML = `${allAns[3]}`;
}

//Looked up how to shuffle answers with ChatGPT
function shuffleAns(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; //swap elements.
        console.log(allAns);
    }
}












next.addEventListener('click', function () { // Correct event listener
    questionNum++;
    getQuestion();
});

QGet.addEventListener('click', function () {
    fetchQuestions();
});

