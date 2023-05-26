const userScore = document.querySelector(".userScore")
const computerScore = document.querySelector(".computerScore")
const choices = document.querySelectorAll(".choice")
const user = document.querySelector(".user")
const computer = document.querySelector(".computer")
const remark = document.querySelector(".remark")
choices.forEach(choice => choice.addEventListener("click", playGame))

const scoreboard = {
  player: 0,
  computer: 0,
  playagain: "Score: 0"
}


function playGame(e) {
  const userChoice = e.target.id;
  const computerChoice = ["scissors", "paper", "rock"];
  const randomChoiceIndex = Math.floor(Math.random() * computerChoice.length);
  const computerChoiceValue = computerChoice[randomChoiceIndex];
  
  user.textContent = userChoice;
  computer.textContent = computerChoiceValue
 
  // Compare the choices and determine the winner
  if (userChoice === computerChoiceValue) {
   remark.textContent = "It's a tie!"
  } else if (
    (userChoice === "rock" && computerChoiceValue === "scissors") ||
    (userChoice === "paper" && computerChoiceValue === "rock") ||
    (userChoice === "scissors" && computerChoiceValue === "paper")
  ) {
    remark.textContent = "You win"
    if (  remark.textContent = "You win") {
       userScore.textContent = ("Score: " + (++scoreboard.player));
       
    }
  } else {
    remark.textContent = "Computer wins!";
    if ( remark.textContent = "Computer wins!") {
      computerScore.textContent = ("Score: " + (++scoreboard.player));
    }
   
}
}



function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
