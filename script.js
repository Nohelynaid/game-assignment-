function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const number = Math.floor(Math.random() * 3);

  var Fred = options[number];
  return Fred;
  console.log(Fred);
}

//var computerSelection = options[number];

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  }

  if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "Player has won";
  }

  return "Computer has won";
}

const playerSelection = prompt("Choose rock, paper, or scissors:");
console.log(playerSelection);
if (playerSelection !== null) {
  const computerSelection = computerPlay();
  const result = playRound(playerSelection.toLowerCase(), computerSelection);
  console.log(computerSelection);
  console.log(result);
}
