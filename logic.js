
function getComputerChoice () {
    // generate an array with the three possiblities 
    const strings = ["Rock", "Paper", "Scissors"];

    // Generate a random number between 0 and two
    const randomIndex = Math.floor(Math.random()*strings.length);

    // returns the randomly chosen possibility
    return strings[randomIndex];
}

const random = getComputerChoice(); 

function getPlayerChoice (){
    const playerChoice = prompt("Make your Choice (Rock, Paper or Scissors)")
    return playerChoice
}

function playRound(playerSelection, computerSelection){
    return (
        //if clause to check if you won
        if 
    )
}

