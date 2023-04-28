
function getComputerChoice () {
    // generate an array with the three possiblities 
    const strings = ["Rock", "Paper", "Scissors"];

    // Generate a random number between 0 and two
    const randomIndex = Math.floor(Math.random()*strings.length);

    // returns the randomly chosen possibility
    return strings[randomIndex];
}

// const random = getComputerChoice(); 

function getPlayerChoice (){
    const playerChoice = prompt("Make your Choice (Rock, Paper or Scissors)")
    return playerChoice
}



function playRound(playerSelection, computerSelection){
   

if (playerSelection == "Rock" && computerSelection == "Scissors")
{
    return "You Win! Rock beats Scissors" 
} 
else if (playerSelection == "Rock" && computerSelection == "Rock")
{
    return "Rock and Rock is a tie"
}
else if (playerSelection == "Rock" && computerSelection == "Paper")
{
    return "You Lose! Paper beats rock"
}

else if (playerSelection == "Scissors" && computerSelection == "Scissors")
{
    return "Scissors and Scissors is a tie" 
} 
else if (playerSelection == "Scissors" && computerSelection == "Rock")
{
    return "You Lose! Rock beats Scissors"
}
else if (playerSelection == "Scissors" && computerSelection == "Paper")
{
    return "You Win! Scissors beats Paper"
}

else if (playerSelection == "Paper" && computerSelection == "Paper")
{
    return "Paper and Paper is a tie" 
} 
else if (playerSelection == "Paper" && computerSelection == "Rock")
{
    return "You Win! Paper beats Rock"
}
else if (playerSelection == "Paper" && computerSelection == "Scissors")
{
    return "You Lose! Scissors beats Paper"
}


}

const selection = getPlayerChoice();
const playerSelection = selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();
const computerSelection = getComputerChoice();