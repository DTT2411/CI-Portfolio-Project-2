// Storing DOM info in variables for testing
// const userScore = 0;
// const computerScore = 0;
// const userScore_Span = document.getElementById("player-score");
// const computerScore_Span = document.getElementById("computer-score");
// const scoreArea_Div = document.getElementById("score-area");
// const gameOutcome_Div = document.getElementById("outcome-area");
// const rock_button = document.getElementById("rock");
// const paper_button = document.getElementById("paper");
// const scissors_button = document.getElementById("scissors");
// const spock_button = document.getElementById("spock");
// const lizard_button = document.getElementById("lizard");

// Adds event listeners to game buttons
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("name");
            // alert(`You decided to play ${playerChoice}.`);
            // console.log(playerChoice);
            // console.log(createComputerChoice());
            playGame(playerChoice);
        })
    }
})

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
        case "scissorlizard":
        case "paperrock":
        case "paperspock":
        case "spockscissors":
        case "spockrock":
        case "lizardspock":
        case "lizardpaper":
            console.log("User wins!");
            winGame(playerChoice, computerChoice);
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
            break;
        // Drawing Cases 
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "spockspock":
        case "lizardlizard":
            console.log("Draw!");
            drawGame(playerChoice, computerChoice);
            break
    }   
    // const choices = ["rock", "paper", "scissors", "spock", "lizard"];
    // let playerPoints = 0;
    // let computerPoints = 0;
    // let rand = Math.floor(Math.random() * 5);
    // let computerChoice = choices[rand];
    // console.log(computerChoice); 
}

function createComputerChoice() {
    const choices = ["rock", "paper", "scissors", "spock", "lizard"];
    let rand = Math.floor(Math.random() * 5);
    return choices[rand];
}

function winGame(playerChoice, computerChoice) {
    console.log(`${playerChoice} beats ${computerChoice} - you win!`);
    document.getElementById("game-outcome").textContent = `${playerChoice} beats ${computerChoice} - you win!`;
    incrementPlayerScore();
}

function loseGame(playerChoice, computerChoice) {
    console.log(`${computerChoice} beats ${playerChoice} - you lose!`);
    document.getElementById("game-outcome").textContent = `${computerChoice} beats ${playerChoice} - you lose!`;
    incrementComputerScore();
}

function drawGame(playerChoice) {
    console.log(`You both picked ${playerChoice} - it's a draw!`);
    document.getElementById("game-outcome").textContent = `You both picked ${playerChoice} - it's a draw!`;
}

function incrementPlayerScore() {
    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;
}

function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}



/* The main game "loop", called when the script is first loaded
* and after the user's answer has been processed
*/
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
