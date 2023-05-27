const userScore = document.querySelector(".userScore");
const computerScore = document.querySelector(".computerScore");
const choices = document.querySelectorAll(".choice");
const user = document.querySelector(".user");
const computer = document.querySelector(".computer");
const remark = document.querySelector(".remark");
const playAgain = document.querySelector(".startGame");

let scoreboard = {
  player: 0,
  computer: 0,
};

let audio = document.getElementById("clapping-sound");

function playSound() {
  audio.play();
}

function pauseSound() {
  audio.pause();
  audio.currentTime = 0;
}

function playGame(e) {
  if (scoreboard.player < 5) {
    const userChoice = e.target.id;
    const computerChoice = ["scissors", "paper", "rock"];
    const randomChoiceIndex = Math.floor(Math.random() * computerChoice.length);
    const computerChoiceValue = computerChoice[randomChoiceIndex];

    user.textContent = userChoice;
    computer.textContent = computerChoiceValue;

    // Compare the choices and determine the winner
    if (userChoice === computerChoiceValue) {
      remark.textContent = "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoiceValue === "scissors") ||
      (userChoice === "paper" && computerChoiceValue === "rock") ||
      (userChoice === "scissors" && computerChoiceValue === "paper")
    ) {
      remark.textContent = "You win";
      userScore.textContent = "Score: " + (++scoreboard.player);
      if (scoreboard.player === 5) {
        remark.textContent = "You won the game!";
        playSound();
        openModal();
      }
    } else {
      remark.textContent = "Computer wins!";
      computerScore.textContent = "Score: " + (++scoreboard.computer);
      if (scoreboard.player === 5) {
        remark.textContent = "You won the game!";
        playSound();
        openModal();
      }
    }
  }
}

function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  userScore.textContent = "Score: " + scoreboard.player;
  computerScore.textContent = "Score: " + scoreboard.computer;
  remark.textContent = "";
  user.textContent = "";
  computer.textContent = "";
  closeModal();
  pauseSound();
}

choices.forEach(choice => choice.addEventListener("click", playGame));
playAgain.addEventListener("click", restartGame);

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}


