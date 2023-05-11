
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

//let that keeps the current score
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
   

if (playerSelection == "Rock" && computerSelection == "Scissors")
{
    playerScore ++;
    return "You Win! Rock beats Scissors" 
} 
else if (playerSelection == "Rock" && computerSelection == "Rock")
{
    playerScore ++;
    computerScore ++;
    return "Rock and Rock is a tie"
}
else if (playerSelection == "Rock" && computerSelection == "Paper")
{
    return "You Lose! Paper beats rock"
}

else if (playerSelection == "Scissors" && computerSelection == "Scissors")
{
    playerScore ++;
    computerScore ++;
    return "Scissors and Scissors is a tie" 
} 
else if (playerSelection == "Scissors" && computerSelection == "Rock")
{
    computerScore ++;
    return "You Lose! Rock beats Scissors"
}
else if (playerSelection == "Scissors" && computerSelection == "Paper")
{
    playerScore ++;
    return "You Win! Scissors beats Paper"
}

else if (playerSelection == "Paper" && computerSelection == "Paper")
{
    computerScore ++;
    playerScore ++;

    return "Paper and Paper is a tie" 
} 
else if (playerSelection == "Paper" && computerSelection == "Rock")
{
    playerScore ++;

    return "You Win! Paper beats Rock"
}
else if (playerSelection == "Paper" && computerSelection == "Scissors")
{
    computerScore ++;
    return "You Lose! Scissors beats Paper"
}
}



/*function game (playerSelection){
  
  const selection = getPlayerChoice();
const playerSelection = selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();

const computerSelection = getComputerChoice();
      
    console.log( playRound(playerSelection, computerSelection))
    }
    */

function gameRock()
{
    const playerSelection = "Rock";
    const computerSelection = getComputerChoice();

    const div = document.getElementById('resultsDiv');                     
    div.textContent = (playRound(playerSelection, computerSelection))
}

function gamePaper()
{
    const playerSelection = "Paper";
    const computerSelection = getComputerChoice();
    const div = document.getElementById('resultsDiv');                     
    div.textContent = (playRound(playerSelection, computerSelection))
}
function gameScissors()
{
    const playerSelection = "Scissors";
    const computerSelection = getComputerChoice();
    const div = document.getElementById('resultsDiv');                     
    div.textContent = (playRound(playerSelection, computerSelection))
}

      //adding Event listeners to the buttons 
    btn1.addEventListener('click', gameRock); 
    btn1.addEventListener('click', printResult); 

    btn2.addEventListener('click', gamePaper); 
    btn2.addEventListener('click', printResult); 

    btn3.addEventListener('click', gameScissors);
    btn3.addEventListener('click', printResult); 
 

    // functions that prints the current score, and announces the first who wins 5
    function printResult(){
const currentScoreDiv = document.getElementById("currentResults");
currentScoreDiv.textContent = "your score is: " + playerScore+ " and the computers score is: " + computerScore;
const winner = document.getElementById("winnerDiv") ;
if (playerScore >= 5) {
winner.textContent = "Congratulations, you are the first to reach 5 and won the game!"
}
else if (computerScore >= 5)
{
    winner.textContent = "Nice try, but the computer reached 5 first. :( "
}

}




/* this one is for 5 rounds 
function game (){
    for (let i = 0; i < 7; i ++ ){
        const selection = getPlayerChoice();
const playerSelection = selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();
const computerSelection = getComputerChoice();
      
    console.log( playRound(playerSelection, computerSelection))
    }
}
*/

