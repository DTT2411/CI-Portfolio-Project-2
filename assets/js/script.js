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

// Adds event listener to Description and Rules section to expand/contract on click
let collapsibles = document.getElementsByClassName("collapsible");
for (let collapsible of collapsibles) {
  collapsible.addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "none") {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
  });
}

// Adds event listeners and classes to make the arrow next to the Description and Rules subtitles rotate when expanded vs contracted
let descriptionCollapse = document.getElementById("description-collapse");
let descriptionCollapseIcon = document.getElementById("description-collapse-icon");
descriptionCollapse.addEventListener("click", function() {
    descriptionCollapseIcon.classList.toggle("rotate");
});

let rulesCollapse = document.getElementById("rules-collapse");
let rulesCollapseIcon = document.getElementById("rules-collapse-icon");
rulesCollapse.addEventListener("click", function() {
    rulesCollapseIcon.classList.toggle("rotate");
});


/** 
 * The main game "loop", called when the user clicks a button to initiate a game.
 */
function playGame(playerChoice) {
    const computerChoice = createComputerChoice(); 
    console.log("Player Choice: " + playerChoice); // Test console log, delete before submission
    console.log("Computer Choice: " + computerChoice); // Test console log, delete before submission
    let winningCases = ["rockscissors","rocklizard","scissorspaper","scissorslizard","paperrock","paperspock","spockscissors","spockrock","lizardspock","lizardpaper"];
    let losingCases = ["scissorsrock","lizardrock","paperscissors","lizardscissors","rockpaper","spockpaper","scissorsspock","rockspock","spocklizard","paperlizard"];
    // The following if-else statements compare the combined string of player & computer choices with the above arrays to determine the game outcome
    if (winningCases.includes(playerChoice + computerChoice)) { 
        console.log("User wins!"); // Test console log, delete before submission
        winGame(playerChoice, computerChoice); // Calls the winGame function with populated player & computer choice parameters
        incrementCurrentWinstreak(); // Calls the function to increase current winstreak by 1
        checkMaxWinstreak(); // Calls the function to check whether the current winstreak is greater than the previous maximum
        incrementStats(playerChoice);
        incrementTotalGames("win");
    } else if (losingCases.includes(playerChoice + computerChoice)) {
        console.log("User loses!"); // Test console log, delete before submission
        loseGame(playerChoice, computerChoice); // Calls the loseGame function with populated player & computer choice parameters
        resetCurrentWinstreak(); // Calls the function to reset the winstreak since player lost
        incrementTotalGames("loss");
    } else {
        console.log("Draw!"); // Test console log, delete before submission
        drawGame(playerChoice); // Calls the draw Game function with populated player parameter (only need 1, since both are the same)
        resetCurrentWinstreak(); // Calls the function to reset the winstreak since player drew
        incrementTotalGames("draw");
    }
    outcomeDisplay(playerChoice, computerChoice); // Calls the function to display the player and computer choice from the game in the display boxes
    calculateWinrate(); // Calls the function to calculate new winrate based on won games & total games
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
    // Creates a new string with capitalised first letter to display as the first word in the outcome message
    let playerChoiceCapitalised = playerChoice[0].toUpperCase() + playerChoice.slice(1,); 
    // console.log(playerChoiceCapitalised); // Test log, delete before submission
    document.getElementById("game-outcome").textContent = `${playerChoiceCapitalised} beats ${computerChoice} - you win!`; 
    incrementPlayerScore(); //Calls function to increase player score
}

/** 
 * Updates losing game outcome message and calls the function to increase computer score.
 */
function loseGame(playerChoice, computerChoice) {
    console.log(`${computerChoice} beats ${playerChoice} - you lose!`); // Test log, delete before submission
    // Creates a new string with capitalised first letter to display as the first word in the outcome message
    let playerChoiceCapitalised = playerChoice[0].toUpperCase() + playerChoice.slice(1,); 
    // console.log(playerChoiceCapitalised); // Test log, delete before submission
    document.getElementById("game-outcome").textContent = `${playerChoiceCapitalised} is beaten by ${computerChoice} - you lose!`;
    incrementComputerScore(); //Calls function to increase computer score
}

/** 
 * Updates drawn game outcome.
 */
function drawGame(playerChoice) {
    console.log(`You both picked ${playerChoice} - it's a draw!`); // Test log, delete before submission
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
    // Rounds winrate to the nearest percentage
    let roundedTotalWinrate = Math.round(totalWinrate*100);
    document.getElementById("total-winrate").innerText = roundedTotalWinrate + "%";
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