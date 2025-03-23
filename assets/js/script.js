// jshint esversion: 6

const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");

openModal.addEventListener("click", () => {
    modal.showModal();
});

closeModal.addEventListener("click", () => {
    modal.close();
});

let data;
let counter = 0;

const questionNum = document.getElementById("question-num");

const next = document.getElementById("next-btn");
const QGet = document.getElementById("Q-get");

const timerDisplay = document.getElementById("countdown");
const timer = new quizTimer(timerDisplay, handleTimeout);

const answer1 = document.getElementById("answer-1");
const answer2 = document.getElementById("answer-2");
const answer3 = document.getElementById("answer-3");
const answer4 = document.getElementById("answer-4");
const answerBtn = document.querySelectorAll(".ans-btn"); //Nodelist

let answerChosen; // button element chosen.
let currentQuestion;
let correctAns; // stores the string of the answer.
let correctElement; //the element of the correct button.
let answerID;

function quizTimer(displayElement, ceaseTimer) {
    this.display = displayElement;
    this.ceaseTimer = ceaseTimer;
    this.interval = null;
    this.timeRemaining = 0;
}

//Constructs a timer to use for the quiz.
quizTimer.prototype.start = function (duration) {
    this.timeRemaining = duration;
    this.updateDisplay();

    this.interval = setInterval(() => {
        this.timeRemaining--;
        this.updateDisplay();

        if (this.timeRemaining <= 0) {
            this.stop();
            this.ceaseTimer();
        }
    }, 1000);
};

quizTimer.prototype.stop = function () {
    clearInterval(this.interval);
};

quizTimer.prototype.updateDisplay = function () {
    const seconds = this.timeRemaining < 0 ? 0 : this.timeRemaining; //Prevent negative time remaining.
    this.display.textContent = seconds < 10 ? "0" + seconds : seconds;
}

// Fetch questions from open trivia API.
async function fetchQuestions() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        data = await response.json(); // Assign the data to the data variable.
        getQuestion(); // Call getQuestion after data is fetched.
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
}

//retrieve question function
function getQuestion() {
    //Checks index from counter before proceeding.
    if (counter <= 14) {
        currentQuestion = data.results[counter];
        const questionBox = document.getElementById("question-box");
        // Adds the current question to the question box.
        questionBox.innerHTML = `${currentQuestion.question}`;
        counter++; //increases counter.
        questionNum.innerHTML = counter;
        answerDealer();
    } else {
        console.log("End of Game!");
    }
}

function answerDealer() {
    correctAns = currentQuestion.correct_answer;
    let incorrectStored = currentQuestion.incorrect_answers;
    let allAns = [...incorrectStored, correctAns];
    //Sends to shuffle function which shuffles the answers
    shuffleAns(allAns);

    //inserts shuffled answers into answer boxes
    answer1.innerHTML = `${allAns[0]}`;
    answer2.innerHTML = `${allAns[1]}`;
    answer3.innerHTML = `${allAns[2]}`;
    answer4.innerHTML = `${allAns[3]}`;
    //assigns the data-value="correct".
    assignCorrect();
    //starts timer.
    timer.start(10);
    //Enables the answer buttons to be clicked.
    enableBtns();
}

function shuffleAns(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//Assigns the correct answer the data-value of correct.
function assignCorrect() {
    for (let button of answerBtn) {
        if (button.innerText === correctAns) {
            button.setAttribute("data-value", "correct");
            answerID = button.id;
            console.log(answerID);
            correctElement = document.getElementById(answerID);
            console.log(correctElement);
        } else {
            button.setAttribute("data-value", "incorrect");
        }
        button.addEventListener("click", checkAnswer);
    };
}
//Checks to see if answer button clicked is the correct button.
function checkAnswer(e) {
    disableBtns();
    timer.stop();
    answerChosen = e.currentTarget;
    if (answerChosen.dataset.value === "correct") {
        changeStyle("correct", answerChosen);
        console.log("answer chosen is CORRECT!!");

    } else if (answerChosen.dataset.value === "incorrect") {
        changeStyle("incorrect", answerChosen);
        console.log("answer chosen is incorrect!!");
    } else {
        console.log("error check answer!");
    }
};

// Disables answer buttons after answer has been chosen(nodelist)
function disableBtns() {
    answerBtn.forEach(button => {
        button.disabled = true;
    });
}

//Enables answer buttons when and answers are placed.
function enableBtns() {
    answerBtn.forEach(button => {
        button.disabled = false;
    });
}

//Timeout for timer event handler.
function handleTimeout() {
    disableBtns();
    answerChosen = null;
    console.log(answerChosen);
    changeStyle("noAnswer", correctElement);
}

//changes style of button to indicate if right or wrong answer.
function changeStyle(result, answerChosen) {
    console.log("changing style");

    if (result === "correct") {
        //const correctStyle = document.getElementById(correctAns);
        answerChosen.classList.add("correct");
        setTimeout(() => nextQuestion(), 5000);

    } else if (result === "incorrect") {
        answerChosen.classList.add("incorrect");
        setTimeout(() => nextQuestion(), 5000);

    } else if (result === "noAnswer") {
        console.log("NO ANSWER!");
        correctElement.classList.add("no-answer");
        setTimeout(() => nextQuestion(), 5000);

    } else {
        console.log("error! no styling");
    }
}

//resets dataset value and styling.
function nextQuestion() {
    console.log("NextQuestion");
    correctElement.removeAttribute("data-value", "correct");

    if (!answerChosen) {
        console.log("no-answer");
        correctElement.classList.remove("no-answer");
        getQuestion();

    } else if (answerChosen.innerHTML === correctAns) {
        console.log("correct Answer");
        answerChosen.classList.remove("correct");
        getQuestion();

    } else if (answerChosen.innerHTML !== correctAns) {
        console.log("incorrect Answer");
        answerChosen.classList.remove("incorrect");
        getQuestion();

    } else {
        console.log("error end next question");
    }

}

next.addEventListener("click", function () {
    nextQuestion();
});

QGet.addEventListener("click", function () {
    fetchQuestions();
});

