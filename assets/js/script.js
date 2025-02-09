document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            playGame();
        })
    }
})


function playGame() {
    const choices = ["rock", "paper", "scissors", "spock", "lizard"];
    let playerPoints = 0;
    let computerPoints = 0;
    let rand = Math.floor(Math.random() * 5);
    let computerChoice = choices[rand];
    console.log(computerChoice);
}

function checkUserChoice() {

}

function checkWinner() {

}

function incrementPlayerScore() {

}

function incrementCompuerScore() {

}

function displayOutcome() {

}






/* The main game "loop", called when the script is first loaded
* and after the user's answer has been processed
*/
function playGame(gameType) {

   // Clears answer box after submit button is clicked
   document.getElementById("answer-box").value = "";

   // Focuses cursor in answer box when page opens and after submitting
   document.getElementById("answer-box").focus();

   // Creates a random number between 1 and 5
   let num1 = Math.floor(Math.random() * 5) + 1;

   if (gameType === "addition") {
       displayAdditionQuestion(num1, num2);
   } else if (gameType === "multiply") {
       displayMultiplyQuestion(num1, num2);
   } else if (gameType === "subtract") {
       displaySubtractQuestion(num1, num2);
   } else if (gameType === "division") {
       displayDivisionQuestion(num1, num2);
   } else {
       alert(`Unknown game type: ${gameType}`);
       throw(`Unknown game type: ${gameType}. Aborting!`);
   }
}
