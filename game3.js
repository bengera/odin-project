const buttons = document.querySelectorAll('button');
const currentRound = document.getElementById('round');
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const message = document.getElementById('message');
const buttonReplay = document.getElementById('replay');

const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorsbtn = document.getElementById('scissors');

const playerChoiceImage = document.getElementById('player-choice-image');
const computerChoiceImage = document.getElementById('computer-choice-image');


let playerScore, computerScore, rounds, playing;



function init () {
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    playing = true;

    currentRound.textContent = 0;
    playerChoice.textContent = 'Player';
    computerChoice.textContent = 'Computer';
    message.textContent = 'Let\'s play';
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    
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
        playerChoiceImage.style.backgroundImage = "none";
        computerChoiceImage.style.backgroundImage = "none";

        playerChoice.innerText = playerSelection;
        computerChoice.innerText = computerSelection;


        if (playerSelection === computerSelection) {

            console.log('Tie Game');
            message.innerText = 'Tie Game';
            if (playerSelection === "rock") {
                computerChoiceImage.style.backgroundImage = "url('./img/e-rock.png')"; 
            } else if (playerSelection ===  'paper') {
                computerChoiceImage.style.backgroundImage = "url('./img/e-paper.png')"; 
            } else {
                computerChoiceImage.style.backgroundImage = "url('./img/e-scissors.png')"; 
            }

        } else if (playerSelection == "rock" && (computerSelection == "scissors")) {
            console.log('You win! Rock beats Scissors');
            message.innerText = 'You win! Rock beats Scissors';
            computerChoiceImage.style.backgroundImage = "url('./img/e-scissors.png')";
            playerScore++;

        } else if (playerSelection == "paper" && (computerSelection == "rock")) {
            console.log('You win! Paper beats Rock');
            message.innerText = 'You win! Paper beats Rock';
            computerChoiceImage.style.backgroundImage = "url('./img/e-rock.png')";
            playerScore++;

        } else if (playerSelection == "scissors" && (computerSelection == "paper")) {
            console.log('You win! Scissors beats Paper');
            message.innerText = 'You win! Scissors beats Paper';
            computerChoiceImage.style.backgroundImage = "url('./img/e-paper.png')";
            playerScore++;

        } else if (playerSelection == "scissors" && (computerSelection == "rock")) {
            console.log('You Lose! Rock beats scissors');
            message.innerText = 'You Lose! Rock beats scissors';
            computerChoiceImage.style.backgroundImage = "url('./img/e-rock.png')";
            computerScore++;

        } else if (playerSelection == "rock" && (computerSelection == "paper")) {
            console.log('You Lose! Paper beats Rock');
            message.innerText = 'You Lose! Paper beats Rock';
            computerChoiceImage.style.backgroundImage = "url('./img/e-paper.png')";
            computerScore++;

        } else if (playerSelection == "paper" && (computerSelection == "scissors")) {
            console.log('You Lose! Scissors beats paper');
            message.innerText = 'You Lose! Scissors beats paper';
            computerChoiceImage.style.backgroundImage = "url('./img/e-scissors.png')";
            computerScore++;

        }
        rounds++;
        currentRound.innerText = rounds;
        playerScoreDisplay.innerText = playerScore;
        computerScoreDisplay.innerText = computerScore;
        checkRounds();
    }
}

// BUTTON EVENT LISTENERS   
rockbtn.addEventListener('click', () => {
    playerChoiceImage.style.backgroundImage = "url('./img/rock.png')"
    
});

paperbtn.addEventListener('click', () => {
    playerChoiceImage.style.backgroundImage = "url('./img/paper.png')"
    
});

scissorsbtn.addEventListener('click', () => {
    playerChoiceImage.style.backgroundImage = "url('./img/scissors.png')"
    
});


function checkRounds() {
    if (rounds === 5 && (computerScore > playerScore)) {
        console.log('game over');
        message.innerText = 'Game over, you Lose!';
        playing = false;
        resetGame();

    } else if (rounds === 5 && (playerScore > computerScore)) {
        console.log('Game over, you Win!');
        message.innerText = 'Game over, you Win!';
        playing = false;
        resetGame();

    } else if (rounds === 5 && (playerScore === computerScore)) {
        console.log('Game over, its a tie!');
        message.innerText = 'Game over, its a tie!';
        playing = false;
        resetGame();
    }
}

function resetGame() {
    const resetBox = document.getElementById("reset");
    const resetButton = document.createElement("BUTTON");
    const buttonNode = document.createTextNode("Play again")
    resetButton.appendChild(buttonNode);
    resetButton.classList.add('margin-center');
    resetBox.appendChild(resetButton);
    
    resetBox.addEventListener('click', () => {
        init();
        resetButton.style.display = "none";
        console.log('reset clicked');
    })
    
}



