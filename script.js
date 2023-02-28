/*
Take the user input and the computer input
If the scenario(User: Stone - PC:Scissor) = Won
If the scenario(User: Scissor - PC:Paper) = Won
If the scenario(User: Paper - PC:Stone) = Won
If both get the same item = Tie
Otherwise = Lost*/
const playerSelection = getPlayerSelection();
const computerSelection = getComputerSelection();

playRound(playerSelection, computerSelection);




//Get the input from the user
function getPlayerSelection() {
    const playerChoice = prompt().toLowerCase();
    return playerChoice;
}

//Get Input from Computer
function getComputerSelection() {
    const weaponSelection = ["rock", "paper", "scissor"];
    const randomSelection = parseInt(Math.random() * weaponSelection.length);
    const computerChoice = weaponSelection[randomSelection];
    return computerChoice;
}




function playRound(playerSelection, computerSelection) {

    console.log("USER:" + playerSelection + "   -   " + "PC:" + computerSelection);

    if (playerSelection == "rock" && computerSelection == "scissor" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissor" && computerSelection == "paper") {
        console.log("You have won!");
    }

    else if (playerSelection == "scissor" && computerSelection == "rock" || playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissor") {
        console.log("You have lost!");
    }

    else {
        console.log("It is a tie!");
    }
}


/*
function game() {
    
}*/