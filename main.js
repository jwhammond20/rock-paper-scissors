// Player Score Storage
let playerScore = 0;
let computerScore = 0;
let draws = 0;
const choices = document.querySelectorAll('.choice');

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
        if (playerSelection === computerSelection) {
        draws++;
        winner.innerHTML = `<h3>${draw}</h3>`;
        return draw;
        } 
        else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        winner.innerHTML = `<h3>${playerWinRound}</h3>`;
        return playerWinRound;
        } 
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        winner.innerHTML = `<h3>${playerWinRound}</h3>`;
        return playerWinRound;
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        winner.innerHTML = `<h3>${playerWinRound}</h3>`;
        return playerWinRound;
        }
        else {
        computerScore++;
        winner.innerHTML = `<h3>${computerWinRound}</h3>`;
        return computerWinRound
        }
    }
    
// grab click elements and add event listeners.    
// document.getElementById('rock').addEventListener('click', gamePlay);
// document.getElementById('paper').addEventListener('click', gamePlay);
// document.getElementById('scissors').addEventListener('click', gamePlay);
choices.forEach(choice => choice.addEventListener('click', gamePlay));

// Main Game Play - started from click event. ends after winner = 5.
function gamePlay(e) {
        const playerSelection = e.target.id;
        const computerSelection = computerPlay(gameOptions);
        console.log(`My-Pick: ${playerSelection} vs Computer-Pick: ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Wins: ${playerScore} - Draws: ${draws} - Losses: ${computerScore}`)
        keepScore();
        showPicks(playerSelection, computerSelection);

        if (playerScore >= 5) {
            alert('You Win, Great Job');
            return;
        } 
        else if (computerScore === 5) {
            alert('You Lose, be better');
            return;
        }
    }

 // display Score on screen    
 function keepScore() {
    score.innerHTML = `
    <p>Player: ${playerScore}</p>
    <p>Computer: ${computerScore}</p>
    `;
 }


 function showPicks(playerSelection, computerSelection) {
     selections.innerHTML = `
     <p>Player: ${playerSelection}</p>
     <p>Computer: ${computerSelection}</p>
     <i class="far fa-hand-${playerSelection} fa-10x"></i>
     <i class="far fa-hand-${computerSelection} fa-10x"></i>
     `;
 }


// outputs for return variables
let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let draw = "Its a Tie!"
let playerWin = "Player wins the game! Congratulations!"
let computerWin = "Computer wins the game! Congratulations!"
let invalid = 'not a valid entry, please enter Rock, Paper, or Scissors'

