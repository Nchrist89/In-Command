![In command logo](/assets/images/incommandlogo.webp)

# In command - Testing

Visit the full site here [In Command](https://nchrist89.github.io/In-Command/)

---

## CONTENTS

Testing was carried out while building the project. I started off getting the basic structure for the quiz game created and firstly added the first question to the question box. Once I had this sorted I created a next button which I could click which would then populate the next question into the field. When that was done I followed on to having the answer buttons placed in each answer box. I tested this and selected next question which would then repopulate the answer boxes again. When I had the code correctly shuffling and assigning a correct answer value to the answer box with the correct answer in it. Further testing was done again ensuring that the correct answer was showing with a dataset value of correct.

With every additional function which was added into the process, I again tested the game thoroughly and had to overcome a multitude of different bugs. From finding out certain variables which I thought were holding a particular value but were not to finding out more information about nodelists and the methods available to me using them. I started to learn at a much deeper level about Javascript and was really starting to enjoy it, and also the frustration of bug fixing and resolving the issue.

I have done the majority of testing through Chrome Developer Tools while building and once complete I played the game several times to confirm that it was performing as expected.

I have provided the link to friends and family who have enjoyed playing and provided feedback should there be any issues. Once issue which was raised and I spent a while trying to find out what I must have got wrong in my code and this was really worrying me, but after much testing I found out that it was actually the data provided by Open Trivia AI that was causing an issue. Not my code which was such a relief.

Most users have not said that they have encountered any other issue than the one above and have found it exciting and an addicting game which has been great for testing.

## Automated testing

I have used W3C testing to test my HTML page and 404 page.

 * Index page test

 ![W3C index.html](/assets/docs/readme-images/testing/w3c/w3c-incommand-test.png)

INSERT 404.html testing here.

Testing has also been performed on style.css with no errors found.

* Stylesheet test

![W3C In command stylesheet](/assets/docs/readme-images/testing/w3c/w3c-incommand-stylesheet.png)

Some warnings for my stylesheet test, but these were only related to the fact there has been root styling variables used within the project.

## Javascript testing

JsHint has been used to test script.js which is my only javascript script used for the project.

![JSHint test](/assets/docs/readme-images/testing/jshint-test.png)

The three unused variables are being used and are used when selecting a difficulty, the variable is then used in conjunction with the ApiAddress variable which stores the difficulty selected.

The fourth variable submitScore is actually a function name and I am unsure why this is showing as a variable.

## Lighthouse Testing

Lighthouse has been used to test the performance and page load statistics as well as search engine optimization and best practices.

### Computer test

 A 100 across all 4 categories for my index.html page.

![Lighthouse index.html](/assets/docs/readme-images/testing/lighthouse/lighthouse-indexhtml.png)

### Mobile test

![Lighthouse mobile test](/assets/docs/readme-images/testing/lighthouse/lighthouse-mobile.png)

## Manual testing

### Testing user stories

`First time visitors`

| Goal | Goal achieved by |
| :--- | :--- |
| I would like to enjoy a quiz that provides a need to want to get a better score and pulls me back to want to replay the game. | The user is encouraged by failure to replay the game and increase their score by beating the clock. |
| I would like to start with the easy difficulty option where I can build my confidence and then gradually work my way up the difficulty levels without feeling overwhelmed. | I have added 3 different options for difficulty which are Easy, medium and hard which the user can choose from. Each with a skill bonus added. |
| I would like to see visual feedback on wether or not I got a question right or wrong. so I can learn from it and improve upon my knowledge next time. | Visual feedback is provided to the user when they get a question right or wrong. The answer button will display a green background color for a correct answer and a red background color which flashes for incorrect answer.|
| I would like to be provided visual knowledge of my correct and incorrect guesses so I am kept aware of my progress within the game. | Correct guesses are shown by the hacking progress bar available at the top of the quiz game. This reflects correct answers given. Incorrect guesses are shown by the number accrued on the alert counter on screen. |

`Returning Visitor Goals`

| Goal | Goal achieved by |
| :--- | :--- |
| I would like to complete the quiz as quickly as possible while answering the questions correctly, so I can improve upon my score and climb the leaderboard. | I have added a countdown timer to each question, the more time you have left the bigger your time bonus is which add's to your total score. For correct answers this is significantly increased. |
| I want to have consequences for questions which I get incorrect so that I feel the thrill of the challenge and I am encouraged to improve the next time. | Players are met with failure should they reach an alert counter of 5 and are required to replay to improve upon there previous attempts. The thrill of being victorious has had players returning to play again and again. |
| I want multiple paths to victory so I can replay the game attempting to complete with a new challenge. | I have added two different ways of beating the game. One is to get past all 15 questions and another where if you have 10 correct answers you win the game. |






