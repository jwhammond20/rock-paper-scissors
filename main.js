// Player Score Storage
let playerScore = 0;
let computerScore = 0;
let draws = 0;

// Game Selection options
const gameOptions = ['rock', 'paper', 'scissors'];


// User Prompt Selection
function userPick() {
    const userPick = prompt("Do you choose Rock, Paper, or Scissors?").toLowerCase();
        return userPick;
}

// Random Computer Selection
function computerPlay(arr) {
     const randomIndex = Math.floor(Math.random() * arr.length);
     const computerPick = arr[randomIndex];
     return computerPick 
     }

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return draw;
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return playerWinRound;
    } 
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return playerWinRound;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return playerWinRound;
    }
    else return computerWinRound;
    }


    
//function for player vs computer pick results
//function playRound(playerSelection, computerSelection) {
  //Rock Choice
//   if (playerSelection == "rock") {
//     if (computerSelection == "scissors") {
//       return playerWinRound;
//     } else if (computerSelection == "paper") {
//       return computerWinRound;
//     } else if (computerSelection == "rock") {
//       return draw;
//     } else {
//       return "Something Went Wrong";
//     }
//   }
//   //paper Choice
//   else if (playerSelection == "paper") {
//     if (computerSelection == "rock") {
//       return playerWinRound;
//     } else if (computerSelection == "scissors") {
//       return computerWinRound;
//     } else if (computerSelection == "paper") {
//       return draw;
//     } else {
//       return "Something Went Wrong";
//     }
//   }
//   //scissors Choice
//   else if (playerSelection == "scissors") {
//     if (computerSelection == "paper") {
//       return playerWinRound;
//     } else if (playerSelection == "scissors" && computerSelection == "rock") {
//       return computerWinRound;
//     } else if (playerSelection == "scissors" && computerSelection == "scissors") {
//       return draw;
//     } else {
//       return "Something Went Wrong";
//     }
//   } else {
//     return "That's not a valid choice";
//   }
//}

// outputs for variables
let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let draw = "Its a Tie!"
let playerWin = "Player wins the game! Congratulations!"
let computerWin = "Computer wins the game! Congratulations!"

    
  
const playerSelection = userPick();
  
const computerSelection = computerPlay(gameOptions);

console.log(`My-Pick: ${playerSelection.toUpperCase()} vs Computer-Pick: ${computerSelection.toUpperCase()}`)
console.log(playRound(playerSelection, computerSelection));

//   function gamePlay() {
//       for
//   }