# In command website / game

In command is a fast paced quiz game designed for a range of devices. The aim of the game is to complete the quiz as quick as possible whilst also not triggering the alarm and alerting the enemy to your presence.

![Am I Responsive](assets/docs/readme-images/design/am-i-responsive-titlescreen.png)

[View on GitHub Pages](https://nchrist89.github.io/In-Command/)

## Introduction

![In Command Logo](assets/docs/readme-images/design/incommandlogofinal.png)

In command has been the second website and first game I have created using Javascript. I had so much fun in building it and have learnt so much from this project and about my love for Javascript. The end result of the project isn't exactly what I had originally planned but it's turned out even better after a decision mid-way to change the feel of the project. It originally felt very dull and I wanted it to have a more 80's style Bladerunner vibe to it which would also work with the idea that I originally had planned and the outcome I am extremely happy with.

The logo and all images were all designed by AI with prompts which took quite a long time to get just right and were also edited by me. The only thing I have not solely created was the soundtrack and this was from a youtube video which I had to rip the soundtrack from using Audacity software.

I have given the link to many family and friends, all of which have enjoyed the game quite a lot and expressed their frustration at the difficulty but also the want to succeed and be victorious meaning it has been quite addictive and given the game some replayability which has kept quite a few of them entertained whilst letting me know of any issues.

I was let down at the end when I realized in order to make an actual functioning leaderboard. I would need to create a server which could store the scores, so unfortunately I have had to settle with local storage but other than that, I am happy with it. I will look forward to improve and add to it in the future.

The game itself should be the user hacking the machine and the hacking part is substituted with a quiz which in a way is the difficulty in the hacking of the computer. I done it this way to enable me to have a reason for the quiz failure and different victory outcomes. This allowed me to create a basis for the story behind it.

## CONTENTS

___
## User Experience (UX)

**Initial Planning**

When deciding what I wanted to build for my second project, I had a lot of wild idea's and upon looking at how I would create these idea's using Javascript I quickly understood just how difficult they would all be and after looking at various idea's others had gone with, I decided that a quiz could enable me to go with the original idea I had planned but not in the way I had originally planned it. I felt I could make the quiz more interesting and build upon a standard quiz with consequences. A reason to build up correct answers and a question timer to have tension which after brainstorming for many hours, I had come up with what would be the idea behind 'In Command!'.

After running the idea past my father he suggested the name In command and this was a great Idea because the game was taking place on an old style computer (terminal) and would look like it was written in command prompt. Secondly you are a secret agent needing to take command of the situation and the computer and as the player you have the end result of taking command on the leaderboard. So there it was, In Command stuck as the name.

**Key information for the site**

* Allows the user to use a range of devices from small mobile landscape to large mobile landscape. tablet, laptop, computer and large monitors.

* Allow the user to select game difficulty between 3 option which are easy, medium and hard.

* The game has two ways of completing the objection which are to answer 10 questions correctly or making it to the 15th question without 5 alerts triggering a failure.

* Should the user fail they can replay the game on the failure page replaying with the original difficulty chosen otherwise they can return to the title screen (home).

* Completing the game allows the user to input their name to store their name in local storage on the leaderboard.

### User Stories

**Client Goals**

* To provide an interesting way of adapting a quiz into a replayable game, which will be exciting and fun to the user and engage them to replay and be victorious.

* to provide multiple ways to succeed at the given objective.

**First Time Visitor Goals**

*As a player looking for fun and replayability* - I would like to enjoy a quiz that provides a need to want to get a better score and pulls me back to want to replay the game.

*As a novice player* - I would like to start with the easy difficulty option where I can build my confidence and then gradually work my way up the difficulty levels without feeling overwhelmed.

*As a player looking for feedback* - I would like to see visual feedback on wether or not I got a question right or wrong. so I can learn from it and improve upon my knowledge next time.

*As a player interested in progress of completion* - I would like to be provided visual knowledge of my correct and incorrect guesses so I am kept aware of my progress within the game.

**Returning visitor goals**

*As a competitive player* - I would like to complete the quiz as quickly as possible while answering the questions correctly, so I can improve upon my score and climb the leaderboard.

*As a player who prefers challenges* - I want to have consequences for questions which I get incorrect so that I feel the thrill of the challenge and I am encouraged to improve the next time.

*As a strategic player* - I want multiple paths to victory so I can replay the game attempting to complete with a new challenge.

## Design

### Colour Scheme

I have separated the colours used to the colours which mostly make up the quiz game face itself and the colours which are used over the project.

The below colours are what make up the background colors and box borders, text background and text, menu buttons.

![In command colours](assets/docs/readme-images/design/In.command.coolors.png)

The colours below make up the quiz game colours which are designed to feel bright and catch attention onscreen where the focus of the main quiz game. These colours also make up the replay game buttons.

![quiz/game colours](assets/docs/readme-images/design/quiz.game.coolors.png)

### Typography

Google Fonts has been used for the following fonts:

![Orbitron](assets/docs/readme-images/design/fonts/google-font-orbitron.png)

Orbitron has been used as the main primary font which is used for all the main text on the website. When I designed the logo I realised the original font wasn't going to be suitable and I came across Orbitron, it matches the style of a futuristic bladerunner style font which would suit the feel I was looking for.

![Press start 2P](assets/docs/readme-images/design/fonts/google-font-press-start-2p.png)

Press Start 2P was the original font I had gone with for the quiz game but after using it for a while I realized the font size was too big and clunky to be within the quiz game and therefore I decided I would still use it but for the game buttons apart from the return to menu button.

![VT323](assets/docs/readme-images/design/fonts/google-font-vt323.png)

After realizing I was unable to use Press start 2P as the quiz game font I had to look for another font which would suit the style of the game but also be readable without causing too much frustration having to read and VT323 out of several fonts made the cut to be the font I went with.

### Imagery

All images on the homepage of the website have been generated using [Prome AI](https://www.promeai.pro/ai-image-generation) website. All images are owned by myself and have been edited within Gimp(Image manipulation software) to produce their final version used.


### Wireframes

Wireframes was used to create the initial design of the quiz. I wanted for it to be simple and allow me to adapt it to anything I create around it.

![Title page](assets/docs/readme-images/design/Wireframes/wireframes-title-screen.png)
The title page has changed from the mock up wireframe. I originally wanted for their to be a lights off mode but I didn't end up going with it in the end.

![game section](assets/docs/readme-images/design/Wireframes/wireframes-quiz.gamescreen.png)
The game screen almost remains the same as what I had intended.

![Leaderboard section](assets/docs/readme-images/design/Wireframes/wireframes-leaderboard.png)
The leaderboard screen has changed but I was unable to get the edited image I created to work with the scoreboard and adapting it responsively was causing many problems so I had to simplify it.

### Features

* The website / game all runs using Javascript and uses one HTML page which combines all the sections of the game into different screens which are available to the user when they need.

* The main title page which is where the user opens up to is available to get to at all screens, this can be from the 'In Command' logo on screen or the main menu buttons available should the logo be unavailable on screen such as the failure screen.

* The user has the ability to view the scoreboard from the main title page. It opens up giving the user a look at the scoreboard and automatically closes after a short period of time.

* The entire game uses the entire viewport to display and therefore there is no navigation bar and no footer.

* The user has 3 difficulty options to choose from, each giving them a higher starting bonus score.

### Sections / screens (In place of pages)

  The website / game has several sections (screens) which are -

* Title screen (main home page) is what first welcomes the user.
  * I am really happy with how this turned out. I put a lot of effort into making it right. The buttons are not ideal and the colours I wanted were not accessibility friendly so I have had to change them last minute.

  ![Title screen](assets/docs/readme-images/design/screens/resposive-title-screen.png)

* Difficulty selection screen which opens when the user selects the play option.
  * This is a basic difficulty selection screen. The button colour is not idea but I had them match the title screen.

  ![Difficulty screen](assets/docs/readme-images/design/screens/responsive-difficulty-screen.png)

* Game screen which opens after difficulty is selected.
  * The game screen was originally planned to have a background video play and the quiz game was displayed on an old computer monitor but this caused much frustration and would not have been ideal for user experience and therefore it was scrapped. The final outcome is much better, brighter and cleaner.

  ![Game screen](assets/docs/readme-images/design/screens/responsive-gamescreen.png)

* Failure screen which appears when the alerts counter reaches 5.
  * I originally had the guard pop-up on screen over the top of the quiz game but mid way through the project this was made into it's own screen section.

  ![Failure screen](assets/docs/readme-images/design/screens/failure-screen.png)

* Victory screen which appears should the user complete the 15 questions or answer 10 correctly without failing.
  * The victory screen I decided on was a picture of a nuclear missile ready to be fired. A text box appears which shows you your final total score.

  ![Victory screen](assets/docs/readme-images/design/screens/victory-screen.png)

* Leaderboard screen which can be accessed through the main title screen (home) or by completing the game after the victory screen.
  * The leaderboard screen I decided not to put to much time into seeing as I would only be able to make it available for local storage scores. In the future updates I will make a proper leaderboard which can store the scores on an SQL server which I look to learn and implement into this project in the coming months.

  ![Leaderboard screen](assets/docs/readme-images/design/screens/responsive-leaderboard.png)

* How to play modal which is not a screen but should be included here as an option.

  ![How to play modal](assets/docs/readme-images/design/screens/responsive-how-to-play.png)

### Accessibility

I have throughout the project ensured that the website has been accessibility friendly. This has been achieved by:

* Using semantic HTML
* Using descriptive alt attributes on images on the site.
* Ensuring that there is sufficient colour contrast throughout the website.
* Ensuring that answer correct and incorrect are visibly seen as feedback to the user.

## Technologies Used

### Languages Used

* HTML and CSS were used to create this website.

* Javascript for the game functionality and screen switching. All buttons are functional using Javascript.

### Frameworks, Libraries & Programs Used

Balsamiq - Used to create Wireframes.

Git - For version control.

Visual Studio Code - For writing, saving and storing the files used for the website.

Google Fonts - To import fonts used on the website.

Font Awesome - For the iconography used on the website.

Google Dev Tools - To troubleshoot and test all features on the website. Check and resolve issues with the responsivity on the website across devices.

[Prome AI](https://www.promeai.pro/ai-image-generation) - Used for generating the images used in the final project and the In Command logo.

[Tiny Wow (highly recommend)](https://tinywow.com/) - To batch resize multiple images and convert to WebP format for reduced file size.

[Image Colour Picker](https://imagecolorpicker.com) - Used for generating the In command palette but not all colours were used in the final project. The quiz/ game palette Is not.

[Gimp](https://www.gimp.org/) - Used for modifying and editing images used on the website and the in command logo.

[Favicon.io](https://favicon.io/) - To create favicon.

[Am I responsive](http://ami.responsivedesign.is/) - To show the website image across a range of devices.

[Audacity](https://www.audacityteam.org/) - To rip the audio file from Youtube. The soundtrack used for the game.

## Deployment and local development

### Deployment

Github Pages was used to deploy the live website. The instructions to achieve this are below:

1. Log in (or sign up) to Github.
2. Find the repository for this project, Nchrist89/In-Command
3. Click on the Settings link.
4. Click on the Pages link in the left hand side navigation bar.
5. In the Source section, choose main from the drop down and select branch menu. Select Root from the drop down select folder menu.
6. Click Save. Your live Github Pages site is now deployed at the URL shown.

### Local Development

#### How to Fork

To fork the Palms-Peaks-P1 repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, Nchrist89/In-Command.
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the Palms-Peaks-P1 repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, Nchrist89/In-Command.
3. Click on the Code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' in the terminal and then paste the link you copied in step 3. Press Enter.

## Credits

### Code used

* All HTML and CSS code is owned by me and written by myself.

* There is quite a bit of code which I had help completing and correcting using AI but the majority of the code has been either rewritten and added to.

* Some parts of Javascript where noted in my comments has been corrected by AI but was written by me, only once I exhausted myself and frustration would I then ask chatGPT for assistance why my code may be incorrect.

* The main 2 parts of code which I can say is completely provided by AI other than the changed variables is the API fetch function which I had issues with at the beginning of the project and I have left it as is. The entire leaderboard javascript code. I didn't want to have to get too involved with the leaderboard code once I realized the end result would have to be a local storage leaderboard. In later updates I wish to have a full working leaderboard and server which is when I will redo the leaderboard code.

### Content

Content for the website has solely been created by myself, some content where indicted in my comments have been corrected with ChatGPT, Gemini AI and sometimes also validation for code has been confirmed with SiderAI but I have written most of the code apart from the entire leaderboard update code which has been a complete copy over because I could not get it working properly and was reluctant to put effort into it as it is currently only a local storage leaderboard.

### Media

#### Images

* Each image on the website has been created by providing AI with prompts to produce the desired image needed for my content. I have a premium account with PromeAI so the images created using it are legally owned by myself.

### Acknowledgements

* My mentor Jubril Akolade for assistance helping provide guidance and knowledge. helpful hints along the journey.
* My tutor Rachel Furlong for Tutoring sessions weekly and guidance. Q&A's.
* My father Ian Christie for suggesting the name 'In Command'.
* Kevin Powell for all the tips and tricks he has provided in his youtube videos.
* ChatGPT, Gemini and Sider AI tools for helping me with certain issues. giving me a better understanding of Javascript.

