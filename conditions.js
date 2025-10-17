const storedData = JSON.parse(localStorage.getItem("score"));
const scoring = storedData || {
  player: {
    wins: 0,
  },
  computer: {
    wins: 0,
  },
  tieCounter: 0,
};
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const tieScore = document.getElementById("tie-score");
const playerText = document.getElementById("player-text");
const computerText = document.getElementById("computer-text");
const resultText = document.getElementById("result-text");
const resetText = document.getElementById("reset-text");

console.log(scoring);
playerScore.textContent = scoring.player.wins;
computerScore.textContent = scoring.computer.wins;
tieScore.textContent = scoring.tieCounter;

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
  let result = "";
  switch (playerPick) {
    case "Rock":
      if (computerPick === "Rock") {
        setTimeout(function () {
          result = "Tie!";
          scoring.tieCounter++;
          console.log("Tie!");
          resultText.textContent = result;
          tieScore.textContent = scoring.tieCounter;
          console.log(`Player Wins: ${scoring.player.wins}`);
          console.log(`Computer Wins: ${scoring.computer.wins}`);
          console.log(`Tie: ${scoring.tieCounter}`);
          console.log("---------------------------");
          localStorage.setItem("score", JSON.stringify(scoring));
          setTimeout(function () {
            playerText.textContent = "";
            computerText.textContent = "";
            resultText.textContent = "";
            spamPrevention = false;
          }, 1000);
        }, 1000);
      } else if (computerPick === "Paper") {
        setTimeout(function () {
          result = "Computer Win!";
          scoring.computer.wins++;
          console.log("Computer Win!");
          resultText.textContent = result;
          computerScore.textContent = scoring.computer.wins;
          console.log(`Player Wins: ${scoring.player.wins}`);
          console.log(`Computer Wins: ${scoring.computer.wins}`);
          console.log(`Tie: ${scoring.tieCounter}`);
          console.log("---------------------------");
          localStorage.setItem("score", JSON.stringify(scoring));
          setTimeout(function () {
            playerText.textContent = "";
            computerText.textContent = "";
            resultText.textContent = "";
            spamPrevention = false;
          }, 1000);
        }, 1000);
      } else {
        setTimeout(function () {
          result = "Player Win!";
          scoring.player.wins++;
          console.log("Player Win!");
          resultText.textContent = result;
          playerScore.textContent = scoring.player.wins;
          console.log(`Player Wins: ${scoring.player.wins}`);
          console.log(`Computer Wins: ${scoring.computer.wins}`);
          console.log(`Tie: ${scoring.tieCounter}`);
          console.log("---------------------------");
          localStorage.setItem("score", JSON.stringify(scoring));
          setTimeout(function () {
            playerText.textContent = "";
            computerText.textContent = "";
            resultText.textContent = "";
            spamPrevention = false;
          }, 1000);
        }, 1000);
      }
      break;

    case "Paper":
      if (computerPick === "Rock") {
        setTimeout(function () {
          result = "Player Win!";
          scoring.player.wins++;
          console.log("Player Win!");
          resultText.textContent = result;
          playerScore.textContent = scoring.player.wins;
          consoleResult();
          localStorage.setItem("score", JSON.stringify(scoring));
          setTimeout(function () {
            playerText.textContent = "";
            computerText.textContent = "";
            resultText.textContent = "";
            spamPrevention = false;
          }, 1000);
        }, 1000);
      } else if (computerPick === "Paper") {
        setTimeout(function () {
          result = "Tie!";
          scoring.tieCounter++;
          console.log("Tie!");
          resultText.textContent = result;
          tieScore.textContent = scoring.tieCounter;
          consoleResult();
          localStorage.setItem("score", JSON.stringify(scoring));
          setTimeout(function () {
            playerText.textContent = "";
            computerText.textContent = "";
            resultText.textContent = "";
            spamPrevention = false;
          }, 1000);
        }, 1000);
      } else {
        setTimeout(function () {
          result = "Computer Win!";
          scoring.computer.wins++;
          console.log("Computer Win!");
          resultText.textContent = result;
          computerScore.textContent = scoring.computer.wins;
          consoleResult();
          localStorage.setItem("score", JSON.stringify(scoring));
          setTimeout(function () {
            playerText.textContent = "";
            computerText.textContent = "";
            resultText.textContent = "";
            spamPrevention = false;
          }, 1000);
        }, 1000);
      }
      break;

    case "Scissors":
      if (computerPick === "Rock") {
        setTimeout(function () {
          result = "Computer Win!";
          scoring.computer.wins++;
          console.log("Computer Win!");
          resultText.textContent = result;
          computerScore.textContent = scoring.computer.wins;
          consoleResult();
          localStorage.setItem("score", JSON.stringify(scoring));
          setTimeout(function () {
            playerText.textContent = "";
            computerText.textContent = "";
            resultText.textContent = "";
            spamPrevention = false;
          }, 1000);
        }, 1000);
      } else if (computerPick === "Paper") {
        setTimeout(function () {
          result = "Player Win!";
          scoring.player.wins++;
          console.log("Player Win!");
          resultText.textContent = result;
          playerScore.textContent = scoring.player.wins;
          consoleResult();
          localStorage.setItem("score", JSON.stringify(scoring));
          setTimeout(function () {
            playerText.textContent = "";
            computerText.textContent = "";
            resultText.textContent = "";
            spamPrevention = false;
          }, 1000);
        }, 1000);
      } else {
        setTimeout(function () {
          result = "Tie!";
          scoring.tieCounter++;
          console.log("Tie!");
          resultText.textContent = result;
          tieScore.textContent = scoring.tieCounter;
          consoleResult();
          localStorage.setItem("score", JSON.stringify(scoring));
          setTimeout(function () {
            playerText.textContent = "";
            computerText.textContent = "";
            resultText.textContent = "";
            spamPrevention = false;
          }, 1000);
        }, 1000);
      }
      break;
  }

  return result;
}

function consoleResult() {
  console.log(`Player Wins: ${scoring.player.wins}`);
  console.log(`Computer Wins: ${scoring.computer.wins}`);
  console.log(`Tie: ${scoring.tieCounter}`);
  console.log("---------------------------");
}

let spamPrevention = false;

function play(playerChoice) {
  if (!spamPrevention) {
    const playerPick = playerChoice;
    if (playerPick === "Rock") {
      playerText.textContent = playerPick;
      playerText.append(" 👊");
    } else if (playerPick === "Paper") {
      playerText.textContent = playerPick;
      playerText.append(" 🖐️");
    } else if (playerPick === "Scissors") {
      playerText.textContent = playerPick;
      playerText.append(" ✌️");
    }
    spamPrevention = true;
    setTimeout(function () {
      const computerPick = computerChoice();
      if (computerPick === "Rock") {
        computerText.textContent = "👊 ";
        computerText.append(computerPick);
      } else if (computerPick === "Paper") {
        computerText.textContent = "🖐️ ";
        computerText.append(computerPick);
      } else if (computerPick === "Scissors") {
        computerText.textContent = "✌️ ";
        computerText.append(computerPick);
      }
      const winner = checkWinner(playerPick, computerPick);
    }, 1600);
  }
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
    consoleResult();
    playerScore.textContent = scoring.player.wins;
    computerScore.textContent = scoring.computer.wins;
    tieScore.textContent = scoring.tieCounter;
    resetText.textContent = "RESET!";
    setTimeout(function () {
      resetText.textContent = "";
    }, 1600);
    localStorage.removeItem("score");
  }

  return;
}
