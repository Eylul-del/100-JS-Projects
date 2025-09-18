document.addEventListener("DOMContentLoaded", () =>{
    const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

document.querySelectorAll(".choice").forEach(button => {
  button.addEventListener("click", () => {
    let playerChoice = button.id;
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    playRound(playerChoice, computerChoice);
  });
});

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    resultDisplay.textContent = `It's a draw! You both chose ${playerChoice}.`;
    return;
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultDisplay.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    playerScore++;
  } else {
    resultDisplay.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    computerScore++;
  }

  // Update scoreboard
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}
});