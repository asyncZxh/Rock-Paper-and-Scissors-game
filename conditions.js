const scoring = {
  player: {
    wins: 0,
  },
  computer: {
    wins: 0,
  },
  tieCounter: 0,
};
let result = "";
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
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
        scoring.tieCounter++;
        tieScore.textContent = scoring.tieCounter;
        console.log("Tie!");
      } else if (computerPick === "Paper") {
        result = "Computer Win!";
        scoring.computer.wins++;
        computerScore.textContent = scoring.computer.wins;
        console.log("Computer Win!");
      } else {
        result = "Player Win!";
        scoring.player.wins++;
        playerScore.textContent = scoring.player.wins;
        console.log("Player Win!");
      }
      break;

    case "Paper":
      if (computerPick === "Rock") {
        result = "Player Win!";
        scoring.player.wins++;
        console.log("Player Win!");
        playerScore.textContent = scoring.player.wins;
      } else if (computerPick === "Paper") {
        result = "Tie!";
        scoring.tieCounter++;
        tieScore.textContent = scoring.tieCounter;
        console.log("Tie!");
      } else {
        result = "Computer Win!";
        scoring.computer.wins++;
        computerScore.textContent = scoring.computer.wins;
        console.log("Computer Win!");
      }
      break;

    case "Scissors":
      if (computerPick === "Rock") {
        result = "Computer Win!";
        scoring.computer.wins++;
        computerScore.textContent = scoring.computer.wins;
        console.log("Computer Win!");
      } else if (computerPick === "Paper") {
        result = "Player Win!";
        scoring.player.wins++;
        playerScore.textContent = scoring.player.wins;
        console.log("Player Win!");
      } else {
        result = "Tie!";
        scoring.tieCounter++;
        tieScore.textContent = scoring.tieCounter;
        console.log("Tie!");
      }
      break;
  }
}

function play(playerChoice) {
  const playerPick = playerChoice;
  const computerPick = computerChoice();
  checkWinner(playerPick, computerPick);
  console.log(`Player Wins: ${scoring.player.wins}`);
  console.log(`Computer Wins: ${scoring.computer.wins}`);
  console.log(`Tie: ${scoring.tieCounter}`);
  console.log("---------------------------");
  alert(`Player pick: ${playerPick}`);
  alert(`Computer pick: ${computerPick}`);
  alert(`Result: ${result}`);
}

function resetScore() {
  if (
    scoring.player.wins !== 0 ||
    scoring.computer.wins !== 0 ||
    scoring.tieCounter !== 0
  ) {
    scoring.player.wins = 0;
    scoring.computer.wins = 0;
    scoring.tieCounter = 0;
    console.log("Score reset!");
    console.log(`Player: ${scoring.player.wins}`);
    console.log(`Computer: ${scoring.computer.wins}`);
    console.log(`Tie: ${scoring.tieCounter}`);
    playerScore.textContent = scoring.player.wins;
    computerScore.textContent = scoring.computer.wins;
    tieScore.textContent = scoring.tieCounter;
    alert(`Score Reset!
Player: ${scoring.player.wins}
Computer: ${scoring.computer.wins}
Tie: ${scoring.tieCounter}`);
  } else return;
}
