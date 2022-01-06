// Player Score Storage
let playerScore = 0;
let computerScore = 0;
let draws = 0;

// Game Selection options
const gameOptions = ['rock', 'paper', 'scissors'];


// Random Computer Selection
function computerPlay(arr) {
     const randomIndex = Math.floor(Math.random() * arr.length);
     const computerPick = arr[randomIndex];
     return computerPick 
     }


// Player vs computer function with score++
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' || playerSelection === "paper" || playerSelection === "scissors") {
        if (playerSelection === computerSelection) {
        draws++;
        return draw;
        } 
        else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        return playerWinRound;
        } 
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return playerWinRound;
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return playerWinRound;
        }
        else {
        computerScore++;
        return computerWinRound
        }
    }
    else {
        alert('please pick again');
    }
}
    

function gamePlay() {
    for (i = 0 ; i <  1000; i++) {
        const playerSelection = prompt("Do you choose Rock, Paper, or Scissors?").toLowerCase();
        const computerSelection = computerPlay(gameOptions);
        console.log(`My-Pick: ${playerSelection.toUpperCase()} vs Computer-Pick: ${computerSelection.toUpperCase()}`)
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Wins: ${playerScore} - Draws: ${draws} - Losses: ${computerScore}`)

        if (playerScore >= 5) {
            alert('You Win, Great Job');
            return;
        } 
        else if (computerScore === 5) {
            alert('You Lose, be better');
            return;
        }
    }

}


// outputs for return variables
let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let draw = "Its a Tie!"
let playerWin = "Player wins the game! Congratulations!"
let computerWin = "Computer wins the game! Congratulations!"
let invalid = 'not a valid entry, please enter Rock, Paper, or Scissors'


gamePlay()
