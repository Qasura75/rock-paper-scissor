/*
Take the user input and the computer input
If the scenario(User: Stone - PC:Scissor) = Won
If the scenario(User: Scissor - PC:Paper) = Won
If the scenario(User: Paper - PC:Stone) = Won
If both get the same item = Tie
Otherwise = Lost*/
const playerSelection = getPlayerSelection();
const computerSelection = getComputerSelection();

console.log(playerSelection + computerSelection);



//Get the input from the user
function getPlayerSelection() {
    const playerChoice = prompt();
    return playerChoice;
}

//Get Input from Computer
function getComputerSelection() {
    const weaponSelection = ["stone", "paper", "scissor"];
    const randomSelection = parseInt(Math.random() * weaponSelection.length);
    const computerChoice = weaponSelection[randomSelection];
    return computerChoice;
}



/*
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection + computerSelection);
}

function game() {
    
}*/