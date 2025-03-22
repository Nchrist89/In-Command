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

const timerDisplay = document.getElementById("countdown");
const timer = new quizTimer(timerDisplay, handleTimeout);

const answer1 = document.getElementById("answer-1");
const answer2 = document.getElementById("answer-2");
const answer3 = document.getElementById("answer-3");
const answer4 = document.getElementById("answer-4");
const answerBtn = document.querySelectorAll(".ans-btn");

let answerChosen;
let currentQuestion;
let correctAns;
let answerId;

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
        data = await response.json(); // Assign the data
        getQuestion(); // Call getQuestion after data is fetched
    } catch (error) {
        console.error('Error fetching questions:', error);
    }
}

//retrieve question function
function getQuestion() {
    if (counter <= 14) { //Checks current question index from the counter and proceeds if not reached 14 (question 15);
        currentQuestion = data.results[counter];
        const questionBox = document.getElementById("question-box");
        questionBox.innerHTML = `${currentQuestion.question}`;
        counter++;
        questionNum.innerHTML = counter;
        answerDealer();
        timer.start(10);
    }
}

function answerDealer() {
    correctAns = currentQuestion.correct_answer;
    let incorrectStored = currentQuestion.incorrect_answers;
    let allAns = [...incorrectStored, correctAns];
    //Send to shuffle function which shuffles the answers
    shuffleAns(allAns);

    //inserts shuffled answers into answer boxes
    answer1.innerHTML = `${allAns[0]}`;
    answer2.innerHTML = `${allAns[1]}`;
    answer3.innerHTML = `${allAns[2]}`;
    answer4.innerHTML = `${allAns[3]}`;
    //assigns the data-value="correct"
    assignCorrect();
    //Enables the answer buttons to be clicked.
    enableBtns();
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
    timer.stop();
    answerChosen = e.currentTarget;
    disableBtns(answerBtn);
    if (answerChosen.dataset.value === "correct") {
        changeStyle("correct", answerChosen);
        console.log("You answered CORRECT!");
    } else {
        changeStyle("incorrect", answerChosen);
        console.log("answer chosen is incorrect!!");
    }
    setTimeout(() => nextQuestion(), 5000);
};

// Disables answer buttons after answer has been chosen
function disableBtns() {
    answerBtn.forEach(button => {
        button.disabled = true;
    });
    console.log(answerBtn);
}

//Enables answer buttons when and answers are placed.
function enableBtns() {
    answerBtn.forEach(button => {
        button.disabled = false;
    });
}

//Timeout for timer event handle.
function handleTimeout() {
    changeStyle("noAnswer", answerId);
}

//changes style of button to indicate if right or wrong answer.
function changeStyle(result, answerChosen) {
    console.log(answerChosen);
    if (result === "correct") {
        //const correctStyle = document.getElementById(correctAns);
        answerChosen.classList.add("correct");
        console.log(correctAns);
    } else if (result === "incorrect") {
        answerChosen.classList.add("incorrect");
    } else if (result === "noAnswer") {
        console.log("NO ANSWER!");
        let showCorrect = document.getElementById(answerId);
        showCorrect.classList.add("no-answer");
        //Add cool down timer to show correct answer before moving to next question.
        setTimeout(() => nextQuestion(), 5000);
    }
}


//resets the question timer, dataset value and styling.
function nextQuestion() {
    let correctAnsId = document.getElementById(answerId);
    //if no answer is chosen, function will skip
    if (!answerChosen) {
        timer.stop();
        correctAnsId.removeAttribute("data-value", "correct");
        correctAnsId.classList.remove("no-answer");
        getQuestion();
    } else {
        timer.stop();
        correctAnsId = document.getElementById(answerId);
        correctAnsId.removeAttribute("data-value", "correct");
        console.log(answerChosen);
        answerChosen.classList.remove("incorrect", "correct");
        getQuestion();
    }

}


next.addEventListener('click', function () {
    nextQuestion();
});

QGet.addEventListener('click', function () {
    fetchQuestions();
});

