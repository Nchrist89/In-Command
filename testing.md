![In command logo](/assets/images/incommandlogo.webp)

# In command - Testing

Visit the full site here [In Command](https://nchrist89.github.io/In-Command/)

---

## CONTENTS

Testing was carried out while building the project. I started off getting the basic structure for the quiz game created and firstly added the first question to the question box. Once I had this sorted I created a next button which I could click which would then populate the next question into the field. When that was done I followed on to having the answer buttons placed in each answer box. I tested this and selected next question which would then repopulate the answer boxes again. When I had the code correctly shuffling and assigning a correct answer value to the answer box with the correct answer in it. Further testing was done again ensuring that the correct answer was showing with a dataset value of correct.

With every additional function which was added into the process, I again tested the game thoroughly and had to overcome a multitude of different bugs. From finding out certain variables which I thought were holding a particular value but were not to finding out more information about nodelists and the methods available to me using them. I started to learn at a much deeper level about Javascript and was really starting to enjoy it, and also the frustration of bug fixing and resolving the issue.

I have done the majority of testing through Chrome Developer Tools while building and once complete I played the game several times to confirm that it was performing as expected.

I have provided the link to friends and family who have enjoyed playing and provided feedback should there be any issues. An issue which was raised to me, I spent a while trying to find out what I must have got wrong in my code, and this was really worrying me. After much testing, I found out that it was actually the data provided by Open Trivia AI that was causing an issue. Not my code which was such a relief.

Most users have not encountered any other issue than the one above and they have found it very exciting and a very addictive game which has been great for testing.

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

The fourth variable 'submitScore' is actually a function name and I am unsure why this is showing as a variable.

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
| :--- | :--------------- |
| I would like to enjoy a quiz that provides a need to want to get a better score and pulls me back to want to replay the game. | The user is encouraged by failure to replay the game and increase their score by beating the clock. |
| I would like to start with the easy difficulty option where I can build my confidence and then gradually work my way up the difficulty levels without feeling overwhelmed. | I have added 3 different options for difficulty which are Easy, medium and hard which the user can choose from. Each with a skill bonus added. |
| I would like to see visual feedback on wether or not I got a question right or wrong. so I can learn from it and improve upon my knowledge next time. | Visual feedback is provided to the user when they get a question right or wrong. The answer button will display a green background color for a correct answer and a red background color which flashes for incorrect answer.|
| I would like to be provided visual knowledge of my correct and incorrect guesses so I am kept aware of my progress within the game. | Correct guesses are shown by the hacking progress bar available at the top of the quiz game. This reflects correct answers given. Incorrect guesses are shown by the number accrued on the alert counter on screen. |

`Returning Visitor Goals`

| Goal | Goal achieved by |
| :--- | :--------------- |
| I would like to complete the quiz as quickly as possible while answering the questions correctly, so I can improve upon my score and climb the leaderboard. | I have added a countdown timer to each question, the more time you have left the bigger your time bonus is which add's to your total score. For correct answers this is significantly increased. |
| I want to have consequences for questions which I get incorrect so that I feel the thrill of the challenge and I am encouraged to improve the next time. | Players are met with failure should they reach an alert counter of 5 and are required to replay to improve upon there previous attempts. The thrill of being victorious has had players returning to play again and again. |
| I want multiple paths to victory so I can replay the game attempting to complete with a new challenge. | I have added two different ways of beating the game. One is to get past all 15 questions and another where if you have 10 correct answers you win the game. |

- - -

## Full testing

I have done full testing on the following devices.

  * Asus vivobook 15 - Windows 11 ( chrome, firefox, edge, operaGX ).

  * Umidigi A15T smartphone - Chrome browser.

I have also had friends testing and providing feedback on the following devices. Most of which had Google Pixel 9.

  * Google Pixel 9
  * Google Pixel 9
  * Google Pixel 9 Pro
  * Samsung Galaxy S24
  * Samsung Galaxy S24
  * iPhone XR

I have not heard back any other issues than the problem stated previously with the Open Trivia API sending data which had spaces in the answer fields causing an issue with the correct answer being correct. I will look to try correct this in a future update with another function for the data to pass through first.

## Index page testing (In sections as screens)

### Title screen

| Feature tested | Expected outcome | Test | Outcome | Pass / fail |
| :--- | :--- | :--- | :--- | :--- |
| In command Logo | Reloads index.html page | Clicked Logo | index.html page reloads | Pass |
| Play menu button | Opens difficulty selection screen | Clicked play button | Opened difficulty selection screen | Pass |
| How to play menu button | Opens how to play with instructions | Clicked how to play button | Opens Modal with instructions on how to play | Pass |
| Leaderboard button | Opens the leaderboard screen | Clicked leaderboard menu button | Opens the leaderboard to view and closes after a short period of time | Pass |
| Scroll Intro text on mobile | On scroll text is shown | Scrolled up on text | Missing text is shown to display | Pass |

_ _ _

### Difficulty Screen

| Feature tested | Expected outcome | Test | Outcome | Pass / fail |
| :--- | :--- | :--- | :--- | :--- |
| Select Easy difficulty button | Closes difficulty screen, opens game screen and starts easy quiz with api address | clicked 'easy' | Screen switch / ![Api address easy difficulty](/assets/docs/readme-images/testing/api-easy.png) | Pass |
| Select Medium difficulty button | Closes difficulty screen, opens game screen and starts medium quiz with api address | clicked 'medium' | Screen switch / ![Api address medium difficulty](/assets/docs/readme-images/testing/api-medium.png) | Pass |
Select hard difficulty button | Closes difficulty screen, opens game screen and starts hard quiz with api address | clicked 'hard' | Screen switch / ![Api address hard difficulty](/assets/docs/readme-images/testing/api-hard.png) | Pass |
| main menu button | returns user to main menu | clicked main menu button | reloads index.html taking user back to the Title-screen | Pass |

_ _ _

### Game screen

| Feature tested | Expected outcome | Test | Outcome | Pass / fail |
| :--- | :--- | :--- | :--- | :--- |
| In Command logo | Returns user to title screen | clicked logo | Reloads index.html returning user to Title screen | Pass |
| Question box populates first question | First question is pulled from data.results[ variable] | Console.log confirms correct question number pulled from data | Question box populated with question | Pass |
| Answers populate answer boxes | Incorrect and correct answers are pulled from data variable and sent to shuffle function and populate answer boxes | Confirmed through console.log that the answers are shuffling and populating answer boxes + visually in game | Answers correctly populate answer boxes | Pass |
| Correct answer is assigned dataset correct  | assignCorrect function takes correctAns variable and compares to the answers populated and marks the correct and incorrect with a dataset attribute | Confirmed in console.log that the dataset attribute cross referenced with data fetched is correct | Correct and incorrect answers have the right dataset attribute | Pass |
| Correct answer feedback | Choosing correct answer displays green background on answer button | Correct answer chosen cross referenced with data.results confirms correct answer styling is right | Correct answer background turns green | Pass |
| Incorrect answer feedback | Choosing and incorrect answer displays red background on answer button | incorrect answer chosen cross referenced with data.results confirms incorrect answer is incorrect | Incorrect answer background displays red | Pass |
| No Answer Chosen | Timer reaches zero, correct answer highlights blue | Let question timer reach zero | Correct answer has blue background displayed | Pass |
| Answer counter / hacking display | Yellow progress square added to hacking bar | Chose correct answer | Yellow square populates hacking bar | Pass |
| Alert counter | Alert counter increases with incorrect answer | Incorrect answer given | Alert counter increases by 1 digit each time | Pass |
| Question number | Question number should increase by 1 each question | Confirmed in console.log QuestionNum counter is increased and shows visually in game | Pass |
| Score counter | Score Counter increases with value acquired each question | Console.log confirms value increased by matches answer provided and time remaining bonus | Pass |
_ _ _

### Failure screen
| Feature tested | Expected outcome | Test | Outcome | Pass / fail |
| :--- | :--- | :--- | :--- | :--- |
| Fail quiz displays failure screen | Alert counter reaches 5 and Failure screen displays | Raised alert counter to 5 | Failure screen displays and hides game screen | Pass |











