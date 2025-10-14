let playerWins = 0;
let computerWins = 0;
let tieCounter = 0;
let result = "";
const playerScore = document.getElementById("player-score");
const compuerScore = document.getElementById("computer-score");
const tieScore = document.getElementById("tie-score");

function computerChoice() {
  const number = Math.random();
  let pick = "";
  if (number >= 0 && number < 1 / 3) {
    pick = "Rock";
    console.log(`Computer: ${pick}`);
  } else if (number >= 1 / 3 && number < 2 / 3) {
    pick = "Paper";
    console.log(`Computer: ${pick}`);
  } else if (number >= 2 / 3 && number <= 1) {
    pick = "Scissors";
    console.log(`Computer: ${pick}`);
  }

  return pick;
}

function checkWinner(playerPick, computerPick) {
  switch (playerPick) {
    case "Rock":
      if (computerPick === "Rock") {
        result = "Tie!";
        tieCounter++;
        tieScore.textContent = tieCounter;
        console.log("Tie!");
      } else if (computerPick === "Paper") {
        result = "Computer Win!";
        computerWins++;
        compuerScore.textContent = computerWins;
        console.log("Computer Win!");
      } else {
        result = "Player Win!";
        playerWins++;
        playerScore.textContent = playerWins;
        console.log("Player Win!");
      }
      break;

    case "Paper":
      if (computerPick === "Rock") {
        result = "Player Win!";
        playerWins++;
        console.log("Player Win!");
        playerScore.textContent = playerWins;
      } else if (computerPick === "Paper") {
        result = "Tie!";
        tieCounter++;
        tieScore.textContent = tieCounter;
        console.log("Tie!");
      } else {
        result = "Computer Win!";
        computerWins++;
        compuerScore.textContent = computerWins;
        console.log("Computer Win!");
      }
      break;

    case "Scissors":
      if (computerPick === r) {
        result = "Computer Win!";
        computerWins++;
        compuerScore.textContent = computerWins;
        console.log("Computer Win!");
      } else if (computerPick === p) {
        result = "Player Win!";
        playerWins++;
        playerScore.textContent = playerWins;
        console.log("Player Win!");
      } else {
        result = "Tie!";
        tieCounter++;
        tieScore.textContent = tieCounter;
        console.log("Tie!");
      }
      break;
  }
}

function play(playerChoice) {
  const playerPick = playerChoice;
  const computerPick = computerChoice();
  checkWinner(playerPick, computerPick);
  console.log(`Player Wins: ${playerWins}`);
  console.log(`Computer Wins: ${computerWins}`);
  console.log(`Tie: ${tieCounter}`);
  console.log("---------------------------");
  alert(`Player pick: ${playerPick}`);
  alert(`Computer pick: ${computerPick}`);
  alert(`Result: ${result}`);
}
