let playerSelection;
const computerSelection = 0;

let playerScore = 0;
let computerScore = 0;


const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");

const selection = document.getElementById("selection");
const scoreboard = document.getElementById("scoreboard");




rockBtn.addEventListener("click", () => {
    playerSelection = "rock";
    playRound(playerSelection, getComputerSelection());
})

paperBtn.addEventListener("click", () => {
    playerSelection = "paper";
    playRound(playerSelection, getComputerSelection());
})

scissorBtn.addEventListener("click", () => {
    playerSelection = "scissor";
    playRound(playerSelection, getComputerSelection());
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
/*
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerSelection(), getComputerSelection());
     }

     if (playerScore > computerScore) {
        console.log("Congratulations! You have won the game! - Score: USER:" + playerScore + " - " + "PC:" + computerScore);
     }

     else if (playerScore < computerScore) {
        console.log("Unfortunately, you have lost the game! - Score: USER:" + playerScore + " - " + "PC:" + computerScore);
     }

     else {
        console.log("Well played, but it is a tie! - Score: USER:" + playerScore + " - " +   "PC:" + computerScore);
    }
}
*/