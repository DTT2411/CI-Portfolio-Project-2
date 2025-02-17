# Rock Paper Scissors Lizard Spock

## Project Description
Rock Paper Scissors Lizard Spock (RPSLS) is an extension of the classic game, "Rock Paper Scissors" - the addition of two new symbols, Lizard and Spock, and their respective rules, make winning outcomes more likely! 

This application will allow the user to play games of RPSLS against the computer which will pick one of the five symbols randomly to play against you. It's a great way to learn how the game works and have a truly random opponent - versus other humans who might have preferences, or strategies.

The application is great for someone looking to learn about the original Rock Paper Scissors game and impress others with their knowledge about this extended version. With the addition of the stats table, it can also help users develop their understanding of probability, or compete to get the highest score or winstreak. It might even be able to help users figure out their "lucky" gesture!

![Website Mockup Screenshot](assets/images/mockup.jpg) 


## Wireframes
Balsamiq Wireframes software was used during the planning process to establish a general structure the game page. 

Significant changes between the structure indicated in the wireframes versus the end product include:
- The wireframes are B&W - colour scheme was decided on and implemented at a later stage.
- The final version includes a table of stats below the game area screen which had not been designed at the wireframing stage. 

**Mobile** <br>
![Balsamiq Mobile Screenshot](assets/images/wireframe-mobile.jpg)

**Tablet** <br>
![Balsamiq Tablet Screenshot](assets/images/wireframe-tablet.jpg)

**Laptop+** <br>
![Balsamiq Laptop Screenshot](assets/images/wireframe-laptop.jpg)


## Features

### Existing Features
#### 1. Header
Simple header section containing the title of the project and laying out the primary font and colour scheme for the rest of the page.

**Smaller screens (mobile, small tablet, up to 576px)** <br>
![Header Screenshot Mobile](assets/images/header-mobile.jpg) <br>

**Larger screens (tablet, laptop, 768px+)** <br>
![Header Screenshot Laptop](assets/images/header-laptop.jpg) <br>

#### 2. Information Area - game description and rules
The information area contains two sections, one for a description of the game and another displaying the rules (i.e. conditions for winning, losing and drawing).
Both sections are displayed by default but can be collapsed by clicking their respective header, and this is indicated by the arrow icon next to each. 

**Smaller screens (mobile, small tablet, up to 576px)** <br>
![Information Area Screenshot Mobile Default](assets/images/information-area-mobile-default.jpg) <br>

**Larger screens (tablet, laptop, 768px+)** <br>
![Information Area Screenshot Laptop Default](assets/images/information-area-laptop-default.jpg) <br>

#### 3. Game Outcome Area
The game outcome area is featured centrally within the screen since this is the most visually active section for the user to keep track of. The outcome area includes several elements including the score counter, the visual display of the game's outcome, and a message outputting the choices and outcome of the game verbally.

Custom CSS styling is used to keep size of the elements, fonts etc. in the outcome area small for mobile screens and larger for laptop screens and up, but the layout of the area remains consistent. 

**Smaller screens (mobile, small tablet, up to 576px)** <br>
![Game Outcome Area Screenshot Mobile](assets/images/game-outcome-area-mobile.jpg) <br>

**Larger screens (tablet, laptop, 768px+)** <br>
![Game Outcome Area Screenshot Laptop](assets/images/game-outcome-area-laptop.jpg) <br>

#### 4. Game area
The game area includes two elements. The first is the call to action, telling the user how to start a game. The second is a row of buttons corresponding to the different gestures that can be played by the user - this is indicated graphically with icons. Upon clicking one of the buttons, the game instance will run and the outcome will immediately be displayed in the Game Outcome Area described above.

The design of the game area is responsive, with smaller buttons to fit across mobile screens expanding on larger screens to utilise space effectively. 

**Smaller screens (mobile, small tablet, up to 576px)** <br>
![Game Area Screenshot Mobile](assets/images/game-area-mobile.jpg) <br>

**Larger screens (tablet, laptop, 768px+)** <br>
![Game Area Screenshot Laptop](assets/images/game-area-laptop.jpg) <br>

#### 6. Stats Area
The stats area includes the section title followed by a table of various statistics based on the user's past interactions with the game. 

**Smaller screens (mobile, small tablet, up to 576px)** <br>
![Stats Area Screenshot Mobile](assets/images/stats-area-mobile.jpg) <br>

**Larger screens (tablet, laptop, 768px+)** <br>
![Stats Area Screenshot Laptop](assets/images/stats-area-laptop.jpg) <br>

### Features to implement
1. **Development of "Stats" section:** The stats table is functional but could be expanded/improved in several ways:
- Calculate and display in table (adding columns where needed) additional stats e.g. individual win-rates for each specific gesture; loss/draw streaks
- Create graphs or charts comparing winrate of user's choices
- Could also display stats for the computer's choices
- Develop a function to track and display your "best" gesture, taking winrate into consideration. Could require minimum 10 games played to drive up user engagement.

2. **"Reset" button:** This would be a minor quality of life improvement to allow the user to reset all stats and counters on the page, and clear the outcome display boxes and messages, without having to refresh the page. This would be relatively easy to implement with a single function in script.js to target elements in the DOM to set back to 0. 

3. **Cloud data hosting:** Rather than reading values to/from the DOM, one option would be to use HTML Web Storage API to record values. While this would require a significant overhaul of the Javascript for the application, it would allow users' statistics to be saved and retained, rather than resetting every time the page is refreshed. This would also provide additional value to the reset button mentioned above which is currently redundant with the availability of refreshing. This would also be a more secure way to hold game data - currently it is very easy to "cheat" the game, which can be done by simply amending DOM values via devTools. 


## Testing
Testing was conducted throughout the development cycle of the project, using the deployed version of the website as this was deployed at a very early stage. DevTools was utilised extensively to facilitate the testing of the site's responsiveness on different screen sizes (phone, tablet, laptop, desktop) in accordance with industry standard breakpoints (https://getbootstrap.com/docs/5.3/layout/breakpoints/#available-breakpoints).

Both manual testing and validator testing were used to identify potential bugs and inefficiencies in the project code.
 
### Manual Testing
I confirmed through manual testing that the page is responsive on all screen sizes and operates correctly on different browsers such as Chrome, Edge and Safari.

Bugs resolved during manual testing:
- Noticed that the outcome message did not appear capitalised as the `playerChoice` parameter will always be lower case. This was resolved by applying a string method to pull out the first letter in the string, capitalising it, concatenating with the remaining string and and assigning this to a new variable.<br>
`let playerChoiceCapitalised = playerChoice[0].toUpperCase() + playerChoice.slice(1,);`
- Despite using the `.toFixed(2)` math method on the winrate, I was sometimes seeing recurring numbers after the decimal point. This was resolved by splitting the code over two lines and applying the math method separately and assigning to a new variable. <br>
`let roundedTotalWinrate = Math.round(totalWinrate*100);`
- Identified several minor text/label alignment issues in the outcome area which were resolved with amendments to custom CSS.

### Automated Testing
Lighthouse testing was conducted on the deployed page with the following results.
Intial lighthouse test reported an accessibility issue - I did not add `name` attributes to the choice buttons, which makes them difficult to use for users with screen readers. <br>
![Lighthouse Error Screenshot](assets/images/lighthouse-error.jpg) <br>
This was resolved by adding names identical to the IDs (e.g. `rock`, `paper`) to the button elements. After retesting with lighthouse, no further errors were found. <br>

A minor performance warning was highlighted but this was due to calling key resources e.g. Bootstrap, Google Fonts, FontAwesome and was therefore ignored. <br>
![Lighthouse Warning Screenshot](assets/images/lighthouse-warning.jpg) <br>

Final testing on the deployed project returned satisfactory scores for all aspects, as indicated by the screenshot below. <br>
![Lighthouse Test Screenshot](assets/images/lighthouse-test.jpg) <br>

### Validator Testing
The CI-recommended W3C validators were utilised for automated testing of each file within the project.

#### HTML
No warnings or errors reported. <br>
![HTML Error Screenshot](assets/images/html-validator-error.jpg) <br>

#### CSS
1 error was reported upon intial testing: <br>
![CSS Error Screenshot](assets/images/css-validator-error.jpg) <br>
This was resolved by amending the value of `margin-left` from `none` to `0`.

2 warnings were reported.<br>
![CSS Warning Screenshot](assets/images/css-validator-warning.jpg) <br>
2 - Highlights Google Fonts library as external so cannot be checked, can be safely ignored <br>
16 - Pertains to use of CSS variables, can be safely ignored <br>

Since none of the warnings were unexpected or any cause for concern, no action was taken to resolve these. 

#### JS

### Unfixed Bugs
- All identified bugs were reported and resolved.

### Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab.
- From the source section drop-down menu, select the Master Branch.
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The direct link to the deployed page can be found here - https://dtt2411.github.io/CI-Portfolio-Project-2/.


## Credits

### Concept
I used Project Example Idea 1 recommended within Code Institute's Portfolio Project 2 Assessment Guide: https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+JSE_PAGPPF+2021_Q2/courseware/30137de05cd847d1a6b6d2c7338c4655/c3bd296fe9d643af86e76e830e1470dd/

### Code
- I got the idea of applying a class to rotate the arrow next to the description and rules drop-down sections from a stackoverflow thread: https://stackoverflow.com/questions/73831348/put-and-change-arrow-with-collapsible-div-css. Specifically, I used the line `transform: rotateX(-180deg);` in my own style rule on ln42, style.css.

### Content
- Bootstrap structures (e.g. table, collapsible) and classes (e.g. text-center, text-md-start) were used to improve efficiency of html and css respectively. One bootstrap JS script was also used to provide functionality for the collapsible text content in the game information area. https://getbootstrap.com/docs/5.3/getting-started/introduction/.
- Google Fonts for custom fonts used throughout site. Link to embed code used: https://fonts.googleapis.com/css2?family=Jockey+One&family=Orbitron:wght@400..900&display=swap.
- Browser favicon was identified and downloaded from https://www.flaticon.com/.
- Icolour pallete (https://icolorpalette.com/palette-by-themes/ski) and Coolors (https://coolors.co/) were used for inspiration for colour schemes. 
- Amiresponsive (https://ui.dev/amiresponsive) was used to generate the mock-up image for the readme. 
- Balsamiq Wireframes (https://balsamiq.com/) was used extensively during planning to guide the structure and layout of the website. 
- W3C HTML Validator (https://validator.w3.org/#validate_by_input) was utilised extensively during testing.
- W3C CSS Validator (https://jigsaw.w3.org/css-validator/#validate_by_input) was also used during testing.
- Autoprefixer (https://autoprefixer.github.io/) was used to ensure portability of styles across different browsers. 
- Used contrast checker (https://webaim.org/resources/contrastchecker/) to check the viability of the colour scheme. 

### Media
- Font Awesome for iconography, link to personal kit: https://kit.fontawesome.com/3af9805755.js 