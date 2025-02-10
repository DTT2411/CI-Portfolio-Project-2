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
            console.log("User wins!"); // Test console log, delete before submission
            winGame(playerChoice, computerChoice); // Calls the winGame function with populated player & computer choice parameters
            incrementCurrentWinstreak(); // Calls the function to increase current winstreak by 1
            checkMaxWinstreak(); // Calls the function to check whether the current winstreak is greater than the previous maximum
            outcomeDisplay(playerChoice, computerChoice); // Calls the function to display the player and computer choice from the game in the display boxes
            incrementStats(playerChoice);
            // incrementTotalGames();
            incrementTotalGames("win");
            calculateWinrate();
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
            console.log("User loses!"); // Test console log, delete before submission
            loseGame(playerChoice, computerChoice); // Calls the loseGame function with populated player & computer choice parameters
            resetCurrentWinstreak(); // Calls the function to reset the winstreak since player lost
            outcomeDisplay(playerChoice, computerChoice); // Calls the function to display the player and computer choice from the game in the display boxes
            incrementTotalGames("loss");
            calculateWinrate();
            break;
        // Drawing Cases 
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "spockspock":
        case "lizardlizard":
            console.log("Draw!"); // Test console log, delete before submission
            drawGame(playerChoice); // Calls the draw Game function with populated player parameter (only need 1, since both are the same)
            resetCurrentWinstreak(); // Calls the function to reset the winstreak since player drew
            outcomeDisplay(playerChoice, computerChoice); // Calls the function to display the player and computer choice from the game in the display boxes
            incrementTotalGames("draw");
            calculateWinrate();
            break;
    }  
}

/** 
 * Returns a random gesture - the computer's "choice"
 */
function createComputerChoice() {
    const choices = ["rock", "paper", "scissors", "spock", "lizard"]; // Sets up the array of possible choices for the computer
    let rand = Math.floor(Math.random() * 5); // Generates a random number between 0 and 4
    return choices[rand]; //Returns a random array element
}

/** 
 * Updates winning game outcome message and calls the function to increase player score.
 */
function winGame(playerChoice, computerChoice) {
    console.log(`${playerChoice} beats ${computerChoice} - you win!`); // Test console log, delete before submission
    // Capitalises the first letter of the players choice since this will always be the first letter of the outcome message in a won or lost game
    let playerChoiceCapitalised = playerChoice[0].toUpperCase() + playerChoice.slice(1,); 
    // console.log(playerChoiceCapitalised); // Test log, delete before submission
    document.getElementById("game-outcome").textContent = `${playerChoiceCapitalised} beats ${computerChoice} - you win!`; 
    incrementPlayerScore(); //Calls function to increase player score
}

/** 
 * Updates losing game outcome message and calls the function to increase computer score.
 */
function loseGame(playerChoice, computerChoice) {
    console.log(`${computerChoice} beats ${playerChoice} - you lose!`);
    // Capitalises the first letter of the players choice since this will always be the first letter of the outcome message in a won or lost game
    let playerChoiceCapitalised = playerChoice[0].toUpperCase() + playerChoice.slice(1,); 
    // console.log(playerChoiceCapitalised); // Test log, delete before submission
    document.getElementById("game-outcome").textContent = `${playerChoiceCapitalised} is beaten by ${computerChoice} - you lose!`;
    incrementComputerScore(); //Calls function to increase computer score
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
 * Increments the game counters for total, won, lost and drawn games depending on outcome.
 */
function incrementTotalGames(outcome) {
    let oldTotal = parseInt(document.getElementById("total-games").innerText);
    document.getElementById("total-games").innerText = ++oldTotal; 
    if (outcome === "win") {
        let oldWinTotal = parseInt(document.getElementById("total-wins").innerText);
        document.getElementById("total-wins").innerText = ++oldWinTotal; 
    } else if (outcome === "loss") {
        let oldLossTotal = parseInt(document.getElementById("total-losses").innerText);
        document.getElementById("total-losses").innerText = ++oldLossTotal; 
    } else {
        let oldDrawTotal = parseInt(document.getElementById("total-draws").innerText);
        document.getElementById("total-draws").innerText = ++oldDrawTotal; 
    }
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
 * Calculates the player's overall winrate and feeds this into the relevant row in the stats table.
 */
function calculateWinrate() {
    let totalGames = parseInt(document.getElementById("total-games").innerText);
    let totalWinrate = parseInt(document.getElementById("player-score").innerText) / totalGames; // Calculates winrate by reading total game & player score from DOM
    document.getElementById("total-winrate").innerText = (totalWinrate.toFixed(2)*100) + "%";
}

/** 
 * Increments the numbers in the stats area depending on which gesture the player won with.
 */
function incrementStats(playerChoice) {
    switch(playerChoice) {
        case "rock":
            let oldRockScore = parseInt(document.getElementById("rock-wins").innerText);
            document.getElementById("rock-wins").innerText = ++oldRockScore;
            break;
        case "paper":
            let oldPaperScore = parseInt(document.getElementById("paper-wins").innerText);
            document.getElementById("paper-wins").innerText = ++oldPaperScore;
            break;
        case "scissors":
            let oldScissorsScore = parseInt(document.getElementById("scissors-wins").innerText);
            document.getElementById("scissors-wins").innerText = ++oldScissorsScore;
            break;
        case "spock":
            let oldSpockScore = parseInt(document.getElementById("spock-wins").innerText);
            document.getElementById("spock-wins").innerText = ++oldSpockScore;
            break;
        case "lizard":
            let oldLizardScore = parseInt(document.getElementById("lizard-wins").innerText);
            document.getElementById("lizard-wins").innerText = ++oldLizardScore;
            break;
    }
}

/** 
 * Displays the choices for both player and computer in the square boxes.
 * In each case, the icon representing the choice is inserted into the square div elements.
 */
function outcomeDisplay(playerChoice, computerChoice) {
    switch (playerChoice) {
        case "rock":
            document.getElementById("player-choice-icon").innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
            break;
        case "paper":
            document.getElementById("player-choice-icon").innerHTML = '<i class="fa-regular fa-hand"></i>';
            break;
        case "scissors":
            document.getElementById("player-choice-icon").innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
            break;
        case "spock":
            document.getElementById("player-choice-icon").innerHTML = '<i class="fa-regular fa-hand-spock"></i>';
            break;
        case "lizard":
            document.getElementById("player-choice-icon").innerHTML = '<i class="fa-regular fa-hand-lizard"></i>';
            break;
    }
    switch (computerChoice) {
        case "rock":
            document.getElementById("computer-choice-icon").innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
            break;
        case "paper":
            document.getElementById("computer-choice-icon").innerHTML = '<i class="fa-regular fa-hand"></i>';
            break;
        case "scissors":
            document.getElementById("computer-choice-icon").innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
            break;
        case "spock":
            document.getElementById("computer-choice-icon").innerHTML = '<i class="fa-regular fa-hand-spock"></i>';
            break;
        case "lizard":
            document.getElementById("computer-choice-icon").innerHTML = '<i class="fa-regular fa-hand-lizard"></i>';
            break;
    }
}