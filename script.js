let playerSelection;
const computerSelection = 0;

let playerScore = 0;
let computerScore = 0;


const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");

const selection = document.getElementById("selection");
const scoreboard = document.getElementById("scoreboard");
const result = document.getElementById("result");



rockBtn.addEventListener("click", () => {
    playerSelection = "rock";
    game()
})

paperBtn.addEventListener("click", () => {
    playerSelection = "paper";
    game()
})

scissorBtn.addEventListener("click", () => {
    playerSelection = "scissor";
    game()
})

//Get Input from Computer
function getComputerSelection() {
    const weaponSelection = ["rock", "paper", "scissor"];
    const randomSelection = parseInt(Math.random() * weaponSelection.length);
    const computerChoice = weaponSelection[randomSelection];
    return computerChoice;
}



//Take the user input and the computer input and evaluate who the winner is
function playRound(playerSelection, computerSelection) {
    selection.textContent = "USER: " + playerSelection + "   -   " + "PC: " + computerSelection;

    if (playerSelection == "rock" && computerSelection == "scissor" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissor" && computerSelection == "paper") {
        playerScore++;
        scoreboard.textContent = "You have won! - Score: USER:" + playerScore + " - " + "PC:" + computerScore;
    }

    else if (playerSelection == "scissor" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissor") {
        computerScore++;
        scoreboard.textContent = "You have lost! - Score: USER:" + playerScore + " - " + "PC:" + computerScore;
    }

    else {
        scoreboard.textContent = "It is a tie! - Score: USER:" + playerScore + " - " +   "PC:" + computerScore;
    }
}

//Repeats 5 rounds and then decides who has won
function game() {
    if (playerScore == 5) {
        result.textContent = "Congratulations! You have won the game! - Score: USER:" + playerScore + " - " + "PC:" + computerScore;
    }
    else if (computerScore == 5){
        result.textContent = "Unfortunately, you have lost the game! - Score: USER:" + playerScore + " - " + "PC:" + computerScore;
    }
    else {
        playRound(playerSelection, getComputerSelection());
    }
}