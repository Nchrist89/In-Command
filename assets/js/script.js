const modal = document.getElementById('modal');
const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});


// After hours of failure trying to get API to work, I had gemini AI fix it for me.
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
    if (questionNum <= 14) { //Check if data exists and if questionNum is in the array.
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
    answer1.innerHTML = `${allAns[0]}`;
    answer2.innerHTML = `${allAns[1]}`;
    answer3.innerHTML = `${allAns[2]}`;
    answer4.innerHTML = `${allAns[3]}`;
}








next.addEventListener('click', function () { // Correct event listener
    questionNum++;
    getQuestion();
});

QGet.addEventListener('click', function () {
    fetchQuestions();
});

