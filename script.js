// 1) First generate the number between 1 and 20
// 2) Check for the user input
//     if user input is correct:
//       Show a message saying that won the game
//       Check for the higher score and set the value if is higher
//     else:
//       Decrease the score value
// 3) If the user clicks again, reset the game
let secretNumber = Math.floor(Math.random() * 20) + 1;
let highScore = 0;

function play() {
  let userNumber = Number(document.querySelector(".guess").value);
  if (userNumber === 0) {
    alert("Plase write a number to play!");
    return;
  }
  let score = Number(document.querySelector(".score").textContent);
  if (userNumber === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".question-mark").textContent = String(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = String(highScore);
    }
  } else {
    document.querySelector(".score").textContent = String(score - 1);
    if (userNumber < secretNumber) {
      document.querySelector(".message").textContent = "📉 too low";
    } else {
      document.querySelector(".message").textContent = "📈 too high";
    }
  }
}

function reset() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".question-mark").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "20";
}

const btnCheck = document.querySelector(".btn--check");
btnCheck.addEventListener("click", play);

const btnAgain = document.querySelector(".again");
btnAgain.addEventListener("click", reset);
