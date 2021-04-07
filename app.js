const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const randomNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[randomNumber];
        compareHands(this.textContent, computerChoice);
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
      });
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    } else if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins";
        playerScore++;
        updateScore();
        return;
      }
      winner.textContent = "Computer wins";
      computerScore++;
      updateScore();
      return;
    } else if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player wins";
        playerScore++;
        updateScore();
        return;
      }
      winner.textContent = "Computer wins";
      computerScore++;
      updateScore();
      return;
    } else if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player wins";
        playerScore++;
        updateScore();
        return;
      }
      winner.textContent = "Computer wins";
      computerScore++;
      updateScore();
      return;
    }
  };

  const updateScore = () => {
    const currentPlayerScore = document.querySelector(".player-score p");
    const currentComputerScore = document.querySelector(".computer-score p");
    currentPlayerScore.textContent = playerScore;
    currentComputerScore.textContent = computerScore;
  };

  //Call all the inner functions
  startGame();
  playMatch();
};

game();
