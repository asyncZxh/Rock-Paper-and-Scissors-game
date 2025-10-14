let playerPick = "";
let computerPick = "";
let playerWins = 0;
let computerWins = 0;
let tieCounter = 0;
let result = "";
let r = "rock";
let p = "paper";
let s = "scissor";
const playerScore = document.getElementById("player-score");
const compuerScore = document.getElementById("computer-score");
const tieScore = document.getElementById("tie-score");

function computerChoice() {
  const number = Math.random();
  let pick = "";
  if (number >= 0 && number < 1 / 3) {
    pick = r;
    console.log("Computer: Rock");
  } else if (number >= 1 / 3 && number < 2 / 3) {
    pick = p;
    console.log("Computer: Paper");
  } else if (number >= 2 / 3 && number <= 1) {
    pick = s;
    console.log("Computer: Scissors");
  }

  return pick;
}

function rock() {
  playerPick = r;
  console.log("Player: Rock");
  process();
}

function paper() {
  playerPick = p;
  console.log("Player: Paper");
  process();
}

function scissors() {
  playerPick = s;
  console.log("Player: Scissors");
  process();
}

function checkWinner() {
  switch (playerPick) {
    case "rock":
      if (computerPick === r) {
        result = "Tie!";
        tieCounter++;
        tieScore.textContent = tieCounter;
        console.log("Tie!");
      } else if (computerPick === p) {
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

    case "paper":
      if (computerPick === r) {
        result = "Player Win!";
        playerWins++;
        console.log("Player Win!");
        playerScore.textContent = playerWins;
      } else if (computerPick === p) {
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

    case "scissor":
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

function process() {
  computerPick = computerChoice();
  checkWinner();
  console.log(`Player Wins: ${playerWins}`);
  console.log(`Computer Wins: ${computerWins}`);
  console.log(`Tie: ${tieCounter}`);
  console.log("---------------------------");
  alert(`Player pick: ${playerPick}`);
  alert(`Computer pick: ${computerPick}`);
  alert(`Result: ${result}`);
}
