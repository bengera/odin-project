let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock paper or scissors?");
    let computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection, computerSelection);
    playRound(playerSelection,computerSelection);
    
  
 }

 function playRound(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection) {
        console.log('Tied Game');
    } else if (playerSelection == "rock" && (computerSelection == "scissors")) {
        console.log('You win! Rock beats Scissors');
        playerScore++;
    } else if (playerSelection == "paper" && (computerSelection == "rock")) {
        console.log('You win! Paper beats Rock');
        playerScore++;
    } else if (playerSelection == "scissors" && (computerSelection == "paper")) {
        console.log('You win! Scissors beats Paper');
        playerScore++;
    } else if (playerSelection == "scissors" && (computerSelection == "rock")) {
        console.log('You Lose! Rock beats scissors');
        computerScore++;
    } else if (playerSelection == "rock" && (computerSelection == "paper")) {
        console.log('You Lose! Paper beats Rock');
        computerScore++;
    } else if (playerSelection == "paper" && (computerSelection == "scissors")) {
        console.log('You Lose! Scissors beats paper');
        computerScore++;
    } else if (playerSelection == "") {
        console.log('You entered nothing and that is not a valid play. Please choose Rock, Paper or Scissors.');
    } else {
        console.log('You entered ' + playerSelection + ' and that is not a valid play. Please choose Rock, Paper or Scissors.');
    }   
    rounds++;
    console.log('Round ' + rounds + ' complete');
    console.log(playerScore + ' for you and ' + computerScore + ' for the computer');
 }
 
 function result() {
    if (playerScore > computerScore) {
        console.log('You win with ' + playerScore + ' points');
    } else if (playerScore < computerScore) {
        console.log('You lose');
    } else {
        console.log('Its a tie');
    }
 }

result();
