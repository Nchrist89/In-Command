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

let data = null; // Initialize data to null

let questionNum = 0;

const questionNumElement = document.getElementById("question-num"); // Corrected variable name

const next = document.getElementById("next-btn");

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

// retrieve question function
function getQuestion() {
    if (data && data.results && data.results.length > questionNum) { //Check if data exists and if questionNum is in the array.
        let question = data.results[questionNum].question;
        const questionBox = document.getElementById("question-box");
        questionBox.innerText = question;
        questionNumElement.innerText = questionNum + 1; // Update question number display
    } else {
        console.log("No more questions or data not available.");
    }
}

next.addEventListener('click', function() { // Correct event listener
    fetchQuestions();
    questionNum++;
});











