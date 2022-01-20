// Player Score Storage
let playerScore = 0;
let computerScore = 0;
let draws = 0;

const choices = document.querySelectorAll('.choice');
const modal = document.querySelector('.modal');
const result = document.getElementById('result');
const userPick = document.querySelector('.userPick');
const compPick = document.querySelector('.compPick');
const restart = document.getElementById('restart');
const newRound = document.getElementById('newround');

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
        winner.innerHTML = `
        <h3>${draw}</h3>`;
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
    

// Main Game Play - started from click event. ends after winner = 5.
function gamePlay(e) {
        const playerSelection = e.target.id;
        const computerSelection = computerPlay(gameOptions);
        console.log(`My-Pick: ${playerSelection} vs Computer-Pick: ${computerSelection}`)
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Wins: ${playerScore} - Draws: ${draws} - Losses: ${computerScore}`)
        keepScore();
        showPicks(playerSelection, computerSelection);
    }

 // display Score on screen    
 function keepScore() {
    myScore.innerHTML = playerScore;
    compScore.innerHTML = computerScore;
    tieGame.innerHTML = draws;
 }


 function showPicks(playerSelection, computerSelection) {
     userPick.innerHTML = `
     <h4>Player: ${playerSelection}</h4>
     <i class="icon2 far fa-hand-${playerSelection} fa-9x"></i>`;
     
     compPick.innerHTML = `
     <h4>Comp: ${computerSelection}</h4>
     <i class="icon2 far fa-hand-${computerSelection} fa-9x"></i>
     `;
     
     modal.style.display = 'block';
 }

 // Clear modal
function clearModal(e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  }

function nextRound() {
    modal.style.display = 'none';
}  

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  draws = 0;
  myScore.innerHTML = playerScore;
  compScore.innerHTML = computerScore;
  tieGame.innerHTML = draws;
}  

// outputs for return variables
let playerWinRound = "You Wins"
let computerWinRound = "Computer Wins"
let draw = "Its a Tie!"
let playerWin = "Player wins the game! Congratulations!"
let computerWin = "Computer wins the game! Congratulations!"

// grab click elements and add event listeners.    
choices.forEach(choice => choice.addEventListener('click', gamePlay));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
newRound.addEventListener('click', nextRound);
