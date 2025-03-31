// jshint esversion: 6


//Modal which contains the how to play instructions at title screen.
const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");

openModal.addEventListener("click", () => {
    modal.showModal();
});

closeModal.addEventListener("click", () => {
    modal.close();
});

//Screen hide and display
const screenIds = {
    victoryScreen: "victory-screen",
    leaderBoardScreen: "leader-board",
    titleScreen: "title-screen",
    failureScreen: "failure",
    gameScreen: "game-screen",
    diffScreen: "difficulty-screen"
};

//adds class screenId element.
function addClass(screenId, className) {
    const element = document.getElementById(screenId);
    if (element) {
        element.classList.add(className);
    }
}

//removes class from screenId element.
function removeClass(screenId, className) {
    const element = document.getElementById(screenId);
    if (element) {
        element.classList.remove(className);
    }
}

//starts quiz when play button is clicked
const playGame = document.getElementById("play-game");
playGame.addEventListener("click", () => {
    chooseDifficulty();
});

//clicking main menu button returns user to main menu.
const mainMenuButton = document.getElementById("main-menu");
    mainMenuButton.addEventListener("click", () => {
        window.location.reload();
    });


//click leaderboard button shows leaderboard screen
const leaderBoardButton = document.getElementById("leaderboard-button");
leaderBoardButton.addEventListener("click", () => {
    addClass(screenIds.titleScreen, "hide");
    removeClass(screenIds.leaderBoardScreen, "hide");
    showHighScore();
    setTimeout(() => removeClass(screenIds.titleScreen, "hide"), 5000);
    setTimeout(() => addClass(screenIds.leaderBoardScreen, "hide"), 5000);
})

const easyQuiz = "https://opentdb.com/api.php?amount=15&category=10&difficulty=medium&type=multiple"
const mediumQuiz = "https://opentdb.com/api.php?amount=15&category=10&difficulty=medium&type=multiple"
const hardQuiz = "https://opentdb.com/api.php?amount=15&category=10&difficulty=hard&type=multiple"

//Data and question number counter variable
let data;
let counter = 0;
let apiAddress;

//Sound track variable
const soundTrack = document.getElementById("song"); //audio element

//Question number element
const questionNum = document.getElementById("question-num");

//Timer variables
const timerDisplay = document.getElementById("countdown");
const timer = new quizTimer(timerDisplay, handleTimeout);

//Answer Button elements
const answer1 = document.getElementById("answer-1");
const answer2 = document.getElementById("answer-2");
const answer3 = document.getElementById("answer-3");
const answer4 = document.getElementById("answer-4");
const answerBtn = document.querySelectorAll(".ans-btn"); //Nodelist

// correct answer progress bar variable.
const hackingBar = document.getElementById("hacking-progress");

//answer and correct element variables
let answerChosen; // button element chosen.
let currentQuestion; // stores the current question object.
let correctAns; // stores the string of the answer.
let correctElement; //the element of the correct button.
let answerCounter = 0; // answer correct total.
let quizFailed = false;

//Score variables
let totalScore = 0; // Total end score.
let currentScore = 0;
let totalTimeRem = 0; // adds up answer seconds remaining.

//Alert variable
let alert = 0;

// High score and leaderboard variables
const HIGH_SCORE_KEY = 'highScores';
const MAX_HIGH_SCORES = 10;

// Constructs a timer to use for the quiz.
// instructions provided by Gemini AI.
// written and changed by me and added to by me.
function quizTimer(displayElement, ceaseTimer) {
    this.display = displayElement;
    this.ceaseTimer = ceaseTimer;
    this.interval = null;
    this.timeRemaining = 0;
}

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

function chooseDifficulty() {
    removeClass(screenIds.titleScreen, "display-flex");
    addClass(screenIds.titleScreen, "hide");
    removeClass(screenIds.diffScreen, "hide");
    addClass(screenIds.diffScreen, "display-flex");
}

const easyOption = document.getElementById("easy-diff");
easyOption.addEventListener("click", playQuizGame);
const mediumOption = document.getElementById("medium-diff");
mediumOption.addEventListener("click", playQuizGame);
const hardOption = document.getElementById("hard-diff");
hardOption.addEventListener("click", playQuizGame);


//Starts the quiz by switching screens then fetching questions.
function playQuizGame() {
    addClass(screenIds.diffScreen, "hide");
    removeClass(screenIds.diffScreen, "display-flex");
    console.log("initiate quiz");
    removeClass(screenIds.gameScreen, "hide");
    addClass(screenIds.gameScreen, "display-block");
    fetchQuestions();
}

// Fetch questions from open trivia API.
// code taken from chatGPT.
async function fetchQuestions() {
    try {
        const response = await fetch(apiAddress);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        data = await response.json(); // Assign the data to the data variable.
        setTimeout(() => getQuestion(), 1000); // Call getQuestion after data is fetched with minor time delay.
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
    soundTrack.currentTime = 0;
}

//retrieve question function
function getQuestion() {
    console.log(apiAddress);
    console.log("books for michelle, remove"); // remove books quiz!!!!!
    //Checks index from counter before proceeding.
    if (alert >= 5) {
        console.log(quizFailed);
        gotCaught();
        //if answer counter reaches 10, the user is victorious and game ends.
    } else if (answerCounter === 10) {
        console.log("You were quick enough to hack the system!");
        runEndGame();
        //if counter has not reached 14, retrieve another question.
    } else if (counter <= 14) {
        currentQuestion = data.results[counter];
        const questionBox = document.getElementById("question-box");
        // Adds the current question to the question box.
        questionBox.innerHTML = `${currentQuestion.question}`;
        counter++; //increases counter.
        questionNum.innerHTML = counter;
        answerDealer();
        console.log(answerCounter);
    } else {
        quizFailed = true;
        console.log("quiz failed at getQuestion.");
        gotCaught();
    }
}

//Deals answers to answer button elements.
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
    timer.start(15);
    //Enables the answer buttons to be clicked.
    enableBtns();
}

//Shuffles answers prior to dealing them.
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
            console.log(button.id);
        } else {
            //otherwise it will assign the data-value of incorrect.
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

    //Handles the correct answer event.
    if (answerChosen.dataset.value === "correct") {
        answerCounter++;
        currentScore += 100;
        totalTimeRem += remainingTime;
        changeStyle("correct", answerChosen);
        console.log("answer chosen is CORRECT!!");
        scoreUpdate(currentScore, totalTimeRem);

        //Handles the incorrect answer event or unanswered.
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

//timer reaches zero event handler.
function handleTimeout() {
    disableBtns();
    alert++;
    gotCaught();
    answerChosen = null;
    changeStyle("noAnswer", correctElement);
}

//changes style of button to indicate if right or wrong answer.
function changeStyle(result, answerChosen) {
    console.log("changing style");
    //correct answer styling
    if (result === "correct") {
        answerChosen.classList.add("correct");
        hackProgress();
        // timeout cooldown after question un/answered.
        setTimeout(() => nextQuestion(), 4000);

        //incorrect answer styling.
    } else if (result === "incorrect") {
        answerChosen.classList.add("incorrect");
        setTimeout(() => nextQuestion(), 4000);

        //no answer chosen styling.
    } else if (result === "noAnswer") {
        console.log("NO ANSWER!");
        correctElement.classList.add("no-answer");
        setTimeout(() => nextQuestion(), 4000);

    } else {
        console.log("error! styling function end!");
    }
}

//Runs if the user gets 5 questions wrong.
function gotCaught() {
    //if wrong answer 5 times.
    if (alert === 5) {
        quizFailed = true;
        console.log("got caught 4 times!");
        addClass(screenIds.gameScreen, "hide");
        removeClass(screenIds.gameScreen, "display-block");
        removeClass(screenIds.failureScreen, "hide");
        addClass(screenIds.failureScreen, "display-flex");
        soundTrack.pause();
        //if quiz has been failed.
    } else if (quizFailed === true) {
        console.log("You were not quick enough to hack the system.");
        addClass(screenIds.gameScreen, "hide");
        removeClass(screenIds.gameScreen, "display-block");
        removeClass(screenIds.failureScreen, "hide");
        addClass(screenIds.failureScreen, "display-flex");
        soundTrack.pause();
    } else {
        console.log("Go to Next Question");
    }
}

//Increases when user chooses correct answer.
function hackProgress() {
    hackingBar.innerHTML = ""; //clears existing squares.

    for (let i = 0; i < answerCounter; i++) {
        const square = document.createElement("i");
        square.classList.add("fa-solid", "fa-square-full");
        hackingBar.appendChild(square);
    }
}

//resets dataset value and styling.
function nextQuestion() {
    console.log("NextQuestion");
    if (quizFailed) {
        console.log("You failed to hack the system!");
        // if no answer is chosen.
    } else if (!answerChosen) {
        console.log("no-answer");
        correctElement.classList.remove("no-answer");
        correctElement.removeAttribute("data-value", "correct")
        getQuestion();
        //if answer is correct.
    } else if (answerChosen.innerHTML === correctAns) {
        console.log("correct Answer");
        answerChosen.classList.remove("correct");
        getQuestion();
        //if answer is incorrect.
    } else if (answerChosen.innerHTML !== correctAns) {
        console.log("incorrect Answer");
        answerChosen.classList.remove("incorrect");
        getQuestion();

    } else {
        console.log("Next question error!");
    }
}

//runs the victory screen endgame.
function runEndGame() {
    addClass(screenIds.gameScreen, "hide");
    removeClass(screenIds.victoryScreen, "hide");
    // player enters name, score added to highscores.
    const playerName = prompt("Enter your name:");
    if (playerName) {
        saveHighScore(playerName, totalScore);
        showHighScore(); //updates the leaderboard
        setTimeout(() => viewScoreBoard(), 10000);
    } else {
        console.log("no name provided.");
    }
}

//updates total score with bonus time remaining.
function scoreUpdate(score, totalTimeRem) {
    let timeBonus = totalTimeRem * 10;
    totalScore = score + timeBonus;
    console.log("your total score is:", totalScore);
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.innerText = totalScore;
}

// Saves the users highscore to local storage
// had to get help from Gemini on how to use local storage.
//code written and any variables used apart from variables with an underscore.
function saveHighScore(playerName, totalScore) {
    const highScoresList = localStorage.getItem(HIGH_SCORE_KEY);
    let highScores = highScoresList ? JSON.parse(highScoresList) : [];
    const newHighScore = { name: playerName, score: totalScore };
    highScores.push(newHighScore); // Add the new score
    highScores.sort((a, b) => b.score - a.score); //sort the list ascending
    highScores = highScores.slice(0, MAX_HIGH_SCORES); // ensures highscore list maxes at 10.

    //saves the updated list to local storage
    localStorage.setItem(HIGH_SCORE_KEY, JSON.stringify(highScores));
}

//retrieves the highscores from local storage.
function retrieveHighScores() {
    const highScoreList = localStorage.getItem(HIGH_SCORE_KEY);
    return highScoreList ? JSON.parse(highScoreList) : [];
}

//displays the highscores in a unordered list
//on the leaderboard screen.

function showHighScore() {
    const highScores = retrieveHighScores();
    const highScoreElement = document.getElementById("score-board");

    //checks highscore, if zero creates it.
    if (highScoreElement) {
        highScoreElement.innerHTML = "";
        if (highScores.length === 0) {
            highScoreElement.textContent = "No high scores yet!";
            return;
        }

        //creates unordered list
        const ul = document.createElement("ul");
        highScores.forEach((entry, index) => {
            const li = document.createElement("li");
            li.textContent = `${entry.name}: ${entry.score}`;
            ul.appendChild(li);
        });
        highScoreElement.appendChild(ul);
    } else {
        console.error("highScoreElement not found");
    }
}

//shows leaderboard after quiz completion victory screen.
function viewScoreBoard() {
    addClass(screenIds.victoryScreen, "hide");
    removeClass(screenIds.leaderBoardScreen, "hide");
    showHighScore();
}



