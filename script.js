function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const number = Math.floor(Math.random() * 3);

  return options[number];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "Player has won";
  }

  return "Computer has won";
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  //declares two variables to keep track of the scores

  alert(
    "Welcome to Rock Paper Scissors!\n\n" +
      "The first player to win 3 rounds wins the game.\n\n" +
      "You will enter your choices using pop-up prompts.\n" +
      "The computer will choose its move before you enter yours.\n" +
      "Its choice will be locked and hidden until you make your selection.\n" +
      "This means the computer cannot change its move after seeing your answer.\n " +
      "Good luck!",
  ); //displays instructions in a windows

  while (playerScore < 3 && computerScore < 3) {
    //keeps teh game while player and computer have less than 3 rounds
    let playerSelection = prompt(
      `Score: You ${playerScore} - ${computerScore} Computer

      The computer has locked in its choice and kept it hidden.

    Choose:
    1 = Rock
    2 = Paper
    3 = Scissors
    Or type Rock, Paper, or Scissors:`,
    ); // using prompt to get the player input

    if (playerSelection === null) {
      // if player cancels the game
      alert("Game cancelled. Thanks for playing!");
      return;
    }

    playerSelection = playerSelection.trim().toLowerCase();
    //trim() removes whitespace from both ends of a string

    if (playerSelection === "1") {
      playerSelection = "rock";
    } else if (playerSelection === "2") {
      playerSelection = "paper";
    } else if (playerSelection === "3") {
      playerSelection = "scissors";
    }
    if (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissors"
    ) {
      alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
      continue; //continue stops the play and starts new one
    }

    //COMPUTERS PLAY
    const computerSelection = computerPlay(); //creates the computer choice with the computerPlay functin result

    // These are only for displaying the words with a capital letter
    const playerDisplay =
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    const computerDisplay =
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    alert("Press OK or CLOSE to know the winner.");

    const result = playRound(playerSelection, computerSelection); //calls playRound function to get both player & computer choices

    console.log(`You chose: ${playerDisplay}`);
    console.log(`Computer chose: ${computerDisplay}`);

    //Analysis of the result of the rounds

    if (result === "Draw") {
      alert(
        `It's a draw!\n\nYou chose ${playerDisplay}.\nComputer chose ${computerDisplay}.\n\nNo points awarded.`,
      );

      console.log("Draw! No points awarded.");
    } else if (result === "Player has won") {
      playerScore++;

      alert(
        `You win this round! \n\n${playerDisplay} beats ${computerDisplay}.\n\nScore: You ${playerScore} - ${computerScore} Computer`,
      );

      console.log("You won the round!");
    } else {
      computerScore++;

      alert(
        `The computer wins this round! \n\n${computerDisplay} beats ${playerDisplay}.\n\nScore: You ${playerScore} - ${computerScore} Computer`,
      );

      console.log("Computer won the round.");
    }
  }

  if (playerScore === 3) {
    alert(
      `You won the game!\n\nFinal score:\nYou ${playerScore} - ${computerScore} Computer`,
    );

    console.log("You are the champion!");
  } else {
    alert(
      `The computer won the game!\n\nFinal score:\nYou ${playerScore} - ${computerScore} Computer`,
    );

    console.log("The computer is the champion!");
  }
}

game();
