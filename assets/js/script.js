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

const playGame = document.getElementById("play-game");
playGame.addEventListener("click", () => {
    playQuizGame();
});

//Game functions and statements.

let data;
let counter = 0;

const soundTrack = document.getElementById("song");
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

// correct answer progress bar.
const hackingBar = document.getElementById("hacking-progress");

let answerChosen; // button element chosen.
let currentQuestion; // stores the current question object.
let correctAns; // stores the string of the answer.
let correctElement; //the element of the correct button.
let answerCounter = 0; // answer correct total.


let totalScore = 0; // Total end score.
let currentScore = 0;
let totalTimeRem = 0; // adds up answer seconds remaining.

let alert = 0;

function quizTimer(displayElement, ceaseTimer) {
    this.display = displayElement;
    this.ceaseTimer = ceaseTimer;
    this.interval = null;
    this.timeRemaining = 0;
}

// Constructs a timer to use for the quiz.
// instructions provided by Gemini AI.
// written and changed by me.

quizTimer.prototype.start = function (duration) {
    this.timeRemaining = duration;
    this.initialDuration = duration; //stores the set duration;
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
    this.interval = null;
    this.stoppedRemaining = this.timeRemaining; //stores remaining time
};

quizTimer.prototype.getStoppedRemaining = function() {
    return this.stoppedRemaining;
}

quizTimer.prototype.updateDisplay = function () {
    const seconds = this.timeRemaining < 0 ? 0 : this.timeRemaining; //Prevent negative time remaining.
    this.display.textContent = seconds < 10 ? "0" + seconds : seconds;
}

// Fetch questions from open trivia API.
// code taken from chatGPT.

function playQuizGame() {
    const titleScreen = document.getElementById("title-screen");
    titleScreen.classList.remove("display-flex");
    titleScreen.classList.add("hide");
    const game = document.getElementById("game");
    game.classList.add("display-block");
    game.classList.remove("hide");
    fetchQuestions();
}

async function fetchQuestions() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=15&category=18&difficulty=easy&type=multiple");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        data = await response.json(); // Assign the data to the data variable.
        getQuestion(); // Call getQuestion after data is fetched.
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
    soundTrack.currentTime = 0;
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

//Shuffles answers.
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
            correctElement = document.getElementById(button.id);
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
    let remainingTime = timer.getStoppedRemaining(); // stores time remaining.
    console.log("Time remaining:", remainingTime);
    answerChosen = e.currentTarget;
    if (answerChosen.dataset.value === "correct") {
        answerCounter++;
        currentScore += 100;
        totalTimeRem += remainingTime;
        changeStyle("correct", answerChosen);
        console.log("answer chosen is CORRECT!!");
        scoreUpdate(currentScore, totalTimeRem);

    } else if (answerChosen.dataset.value === "incorrect") {
        currentScore += 50;
        totalTimeRem += remainingTime;
        changeStyle("incorrect", answerChosen);
        console.log("answer chosen is incorrect!!");
        scoreUpdate(currentScore, totalTimeRem);
        alert++;
        gotCaught();
    } else {
        console.log("error check answer end!");
    }
};

// Disables answer buttons after answer has been chosen(nodelist)
function disableBtns() {
    answerBtn.forEach(button => {
        button.disabled = true;
    });
}

//Enables answer buttons when answers are placed.
function enableBtns() {
    answerBtn.forEach(button => {
        button.disabled = false;
    });
}

//Timeout for timer event handler.
function handleTimeout() {
    disableBtns();
    answerChosen = null;
    changeStyle("noAnswer", correctElement);
}

//changes style of button to indicate if right or wrong answer.
function changeStyle(result, answerChosen) {
    console.log("changing style");

    if (result === "correct") {
        answerChosen.classList.add("correct");
        hackProgress();
        // timeout cooldown after question un/answered.
        setTimeout(() => nextQuestion(), 4000);

    } else if (result === "incorrect") {
        answerChosen.classList.add("incorrect");
        setTimeout(() => nextQuestion(), 4000);

    } else if (result === "noAnswer") {
        console.log("NO ANSWER!");
        correctElement.classList.add("no-answer");
        setTimeout(() => nextQuestion(), 4000);

    } else {
        console.log("error! styling function end!");
    }
}

function gotCaught() {
    if (alert === 2) {
        const gamearea = document.getElementById("game-area");
        gamearea.classList.add("hide");
        const screen = document.getElementById("overlay");
        screen.classList.add("overlay");
        const guardImage = document.getElementById("alert-guard");
        guardImage.classList.remove("hide-guard");
        soundTrack.pause();
    }
    console.log("got caught:", alert);
}

//Increases when user chooses correct answer.
function hackProgress() {
    hackingBar.innerHTML = ""; //clears existing squares.

    for (let i = 0; i < answerCounter; i++) {
        const square = document.createElement("i");
        square.classList.add("fa-solid", "fa-square");
        hackingBar.appendChild(square);
    }
}

//resets dataset value and styling.
function nextQuestion() {
    console.log("NextQuestion");

    if (!answerChosen) {
        console.log("no-answer");
        correctElement.classList.remove("no-answer");
        correctElement.removeAttribute("data-value", "correct")
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
        console.log("error, end next question");
    }
}

//updates user score.
function scoreUpdate(score, totalTimeRem) {
    let timeBonus = totalTimeRem * 10;
    totalScore = score + timeBonus;
    console.log("your total score is:", totalScore);
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.innerText = totalScore;
}

next.addEventListener("click", function () {
    nextQuestion();
});

QGet.addEventListener("click", function () {
    fetchQuestions();
});

