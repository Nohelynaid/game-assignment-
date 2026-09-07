function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const number = Math.floor(Math.random() * 3);
  return options[number];
}

console.log(computerPlay());

function playRound(playerSelection,computerSelection){if (playerSelection===computerSelection) return "Draw"} 
if {(playerSelection==="rock") and (computerSelection === "paper") OR (computerSelection==="scissors") return "computer has won"}
