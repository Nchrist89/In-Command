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
let counter = 0;

const questionNum = document.getElementById("question-num");

const next = document.getElementById("next-btn");
const QGet = document.getElementById("Q-get");

const answer1 = document.getElementById("answer-1");
const answer2 = document.getElementById("answer-2");
const answer3 = document.getElementById("answer-3");
const answer4 = document.getElementById("answer-4");
const answerBtn = document.getElementsByClassName("ans-btn");

let answerChosen;
let currentQuestion;
let correctAns;
let answerId;
//let allAns;
//let clickedAns;
//let incorrectAns;

//Fetch API Function
async function fetchQuestions() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple");
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
    if (counter <= 14) { //Checks current question and proceeds if not reached 14;
        currentQuestion = data.results[counter];
        const questionBox = document.getElementById("question-box");
        questionBox.innerHTML = `${currentQuestion.question}`;
        counter ++;
        questionNum.innerHTML = counter;
        answerDealer();
    }
}

function answerDealer() {
    correctAns = currentQuestion.correct_answer;
    let incorrectStored = currentQuestion.incorrect_answers;
    let allAns = [...incorrectStored, correctAns];
    //Send to shuffle function which shuffles the answers
    shuffleAns(allAns);
    answer1.innerHTML = `${allAns[0]}`;
    answer2.innerHTML = `${allAns[1]}`;
    answer3.innerHTML = `${allAns[2]}`;
    answer4.innerHTML = `${allAns[3]}`;
    assignCorrect();
}

//Looked up how to shuffle answers with ChatGPT
//mixes up the answers so the correct answer is always placed differently.
function shuffleAns(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; //swap elements.
    }
}

//Assigns the correct answer the data-value of correct.
function assignCorrect() {
    for (let button of answerBtn) {
        if (button.innerText === correctAns) {
            button.setAttribute("data-value", "correct");
            answerId = button.id
            console.log(answerId);
        }
        button.addEventListener('click', checkAnswer);

    };
    console.log(correctAns);
}
//Checks to see if answer button clicked is the correct button.
function checkAnswer(e) {
    answerChosen = e.currentTarget;

    if (answerChosen.dataset.value === "correct") {
        changeStyle("correct", answerChosen);
        console.log("You answered CORRECT!");
    } else {
        changeStyle("incorrect", answerChosen);
        console.log("answer chosen is incorrect!!");
    }
};

//changes style of button to indicate if right or wrong answer.
function changeStyle(result, answerChosen) {
    console.log(answerChosen);
    if (result === "correct") {
        //const correctStyle = document.getElementById(correctAns);
        answerChosen.classList.add("correct");
        console.log(correctAns);
    } else if (result === "incorrect") {
        answerChosen.classList.add("incorrect");
    }
}

//resets the question timer, dataset value and styling.
function nextQuestion() {
    let remAtt = document.getElementById(answerId);
    remAtt.removeAttribute("data-value", "correct");
    console.log(answerChosen);
    answerChosen.classList.remove("incorrect", "correct");
    getQuestion();
}


next.addEventListener('click', function () {
    nextQuestion();
});

QGet.addEventListener('click', function () {
    fetchQuestions();
});

