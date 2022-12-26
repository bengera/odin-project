const buttons = document.querySelectorAll('button');
const currentRound = document.getElementById('round');
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const message = document.getElementById('message');

let playerScore, computerScore, rounds, playing;

const init = function () {
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    playing = true;
}

init();

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerSelection = getComputerChoice();
        console.log(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
    })
})

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playing) {
    playerChoice.innerText = playerSelection;
    computerChoice.innerText = computerSelection;
    

    if (playerSelection === computerSelection) {
        console.log('Tie Game');
        message.innerText = 'Tie Game';
    } else if (playerSelection == "rock" && (computerSelection == "scissors")) {
        console.log('You win! Rock beats Scissors');
        message.innerText = 'You win! Rock beats Scissors';
        playerScore++;
    } else if (playerSelection == "paper" && (computerSelection == "rock")) {
        console.log('You win! Paper beats Rock');
        message.innerText = 'You win! Paper beats Rock';
        playerScore++;
    } else if (playerSelection == "scissors" && (computerSelection == "paper")) {
        console.log('You win! Scissors beats Paper');
        message.innerText = 'You win! Scissors beats Paper';
        playerScore++;
    } else if (playerSelection == "scissors" && (computerSelection == "rock")) {
        console.log('You Lose! Rock beats scissors');
        message.innerText = 'You Lose! Rock beats scissors';
        computerScore++;
    } else if (playerSelection == "rock" && (computerSelection == "paper")) {
        console.log('You Lose! Paper beats Rock');
        message.innerText = 'You Lose! Paper beats Rock';
        computerScore++;
    } else if (playerSelection == "paper" && (computerSelection == "scissors")) {
        console.log('You Lose! Scissors beats paper');
        message.innerText = 'You Lose! Scissors beats paper';
        computerScore++;

    }
    rounds++;
    currentRound.innerText = rounds;
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
    checkRounds();
}
}

function checkRounds() {
    if (rounds === 5) {
        console.log('game over');
        playing = false;
    } else {
        console.log('game goes on');
    }
}

