// Adds event listeners to game buttons upon DOM loading.
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("id");
            playGame(playerChoice);
        })
    }
})

/** 
 * The main game "loop", called when the script is first loaded
  and after the user clicks a button to initiate a game.
 */
function playGame(playerChoice) {
    const computerChoice = createComputerChoice();
    console.log("Player Choice: " + playerChoice);
    console.log("Computer Choice: " + computerChoice);
    // Switch statement combines both parameters into one string to check outcome
    switch(playerChoice + computerChoice) {
        // Winning Cases
        case "rockscissors":
        case "rocklizard":
        case "scissorspaper":
        case "scissorslizard":
        case "paperrock":
        case "paperspock":
        case "spockscissors":
        case "spockrock":
        case "lizardspock":
        case "lizardpaper":
            console.log("User wins!");
            winGame(playerChoice, computerChoice);
            incrementCurrentWinstreak();
            checkMaxWinstreak();
            outcomeDisplay(playerChoice, computerChoice);
            break;
        // Losing Cases
        case "scissorsrock":
        case "lizardrock":
        case "paperscissors":
        case "lizardscissors":  
        case "rockpaper":
        case "spockpaper":
        case "scissorsspock":
        case "rockspock":
        case "spocklizard":
        case "paperlizard":
            console.log("User loses!");
            loseGame(playerChoice, computerChoice);
            resetCurrentWinstreak();
            outcomeDisplay(playerChoice, computerChoice);
            break;
        // Drawing Cases 
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "spockspock":
        case "lizardlizard":
            console.log("Draw!");
            drawGame(playerChoice, computerChoice);
            resetCurrentWinstreak();
            outcomeDisplay(playerChoice, computerChoice);
            break;
    }  
}

/** 
 * Returns a random gesture - the computer's "choice"
 */
function createComputerChoice() {
    const choices = ["rock", "paper", "scissors", "spock", "lizard"];
    let rand = Math.floor(Math.random() * 5);
    return choices[rand];
}

/** 
 * Updates winning game outcome message and calls the function to increase player score.
 */
function winGame(playerChoice, computerChoice) {
    console.log(`${playerChoice} beats ${computerChoice} - you win!`);
    document.getElementById("game-outcome").textContent = `${playerChoice} beats ${computerChoice} - you win!`;
    incrementPlayerScore();
    // Testing ways to make the first letter of the winning choice capitalised!?
    console.log(playerChoice);
    console.log(typeof(playerChoice));
    console.log(playerChoice[0]);
    console.log("test");
    console.log(playerChoice.toUpper());
    console.log("test");
    // playerChoice[0].toUpper;
    // console.log(playerChoice[0]);
    // console.log(playerChoice);
}

/** 
 * Updates losing game outcome message and calls the function to increase computer score.
 */
function loseGame(playerChoice, computerChoice) {
    console.log(`${computerChoice} beats ${playerChoice} - you lose!`);
    document.getElementById("game-outcome").textContent = `${computerChoice} beats ${playerChoice} - you lose!`;
    incrementComputerScore();
}

/** 
 * Updates drawn game outcome.
 */
function drawGame(playerChoice) {
    console.log(`You both picked ${playerChoice} - it's a draw!`);
    document.getElementById("game-outcome").textContent = `You both picked ${playerChoice} - it's a draw!`;
}

/** 
 * Adds one to the player's displayed score.
 */
function incrementPlayerScore() {
    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;
}

/** 
 * Adds one to the computer's displayed score.
 */
function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}

/** 
 * Adds one to the winstreak counter.
 */
function incrementCurrentWinstreak() {
    let oldScore = parseInt(document.getElementById("current-winstreak").innerText);
    document.getElementById("current-winstreak").innerText = ++oldScore;
}

/** 
 * Resets the winstreak counter back to 0.
 */
function resetCurrentWinstreak() {
    document.getElementById("current-winstreak").innerText = 0;
}

/** 
 * Checks if the current winstreak count is greater than the max winstreak count. 
 * If yes, it updates the value to current. 
 */
function checkMaxWinstreak() {
    if (document.getElementById("current-winstreak").innerText > document.getElementById("max-winstreak").innerText) {
        document.getElementById("max-winstreak").innerText = document.getElementById("current-winstreak").innerText;
    }
}

/** 
 * Displays the choices for both player and computer in the square boxes.
 */
function outcomeDisplay(playerChoice, computerChoice) {
    switch (playerChoice) {
        case "rock":
            document.getElementById("player-choice").innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
            break;
        case "paper":
            document.getElementById("player-choice").innerHTML = '<i class="fa-regular fa-hand"></i>';
            break;
        case "scissors":
            document.getElementById("player-choice").innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
            break;
        case "spock":
            document.getElementById("player-choice").innerHTML = '<i class="fa-regular fa-hand-spock"></i>';
            break;
        case "lizard":
            document.getElementById("player-choice").innerHTML = '<i class="fa-regular fa-hand-lizard"></i>';
            break;
    }
    switch (computerChoice) {
        case "rock":
            document.getElementById("computer-choice").innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
            break;
        case "paper":
            document.getElementById("computer-choice").innerHTML = '<i class="fa-regular fa-hand"></i>';
            break;
        case "scissors":
            document.getElementById("computer-choice").innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
            break;
        case "spock":
            document.getElementById("computer-choice").innerHTML = '<i class="fa-regular fa-hand-spock"></i>';
            break;
        case "lizard":
            document.getElementById("computer-choice").innerHTML = '<i class="fa-regular fa-hand-lizard"></i>';
            break;
    }
}


// function playGame(gameType) {

//    // Clears answer box after submit button is clicked
//    document.getElementById("answer-box").value = "";

//    // Focuses cursor in answer box when page opens and after submitting
//    document.getElementById("answer-box").focus();

//    // Creates a random number between 1 and 5
//    let num1 = Math.floor(Math.random() * 5) + 1;

//    if (gameType === "addition") {
//        displayAdditionQuestion(num1, num2);
//    } else if (gameType === "multiply") {
//        displayMultiplyQuestion(num1, num2);
//    } else if (gameType === "subtract") {
//        displaySubtractQuestion(num1, num2);
//    } else if (gameType === "division") {
//        displayDivisionQuestion(num1, num2);
//    } else {
//        alert(`Unknown game type: ${gameType}`);
//        throw(`Unknown game type: ${gameType}. Aborting!`);
//    }
// }
