"use strict";

// Global variables
let secretNumber = Math.floor(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

// DOM elements
const bodyElement = document.querySelector("body");
const questionMarkElement = document.querySelector(".question-mark");
const guessElement = document.querySelector(".guess");
const messageElement = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".highscore");

// Buttons
const btnCheck = document.querySelector(".btn--check");
btnCheck.addEventListener("click", play);
const btnAgain = document.querySelector(".again");
btnAgain.addEventListener("click", reset);

// Gameplay functions
function play() {
  const userNumber = Number(guessElement.value);

  // Bad input
  if (userNumber === 0) {
    alert("Plase write a number to play!");
    return;
  }

  // Correct number
  if (userNumber === secretNumber) {
    bodyElement.style.backgroundColor = "#60b347";
    questionMarkElement.textContent = secretNumber;
    questionMarkElement.style.padding = "4rem 8rem";
    messageElement.textContent = "🎉 Correct Number!";
    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
    }
    return;
  }
  // Incorrect number
  if (score === 0) {
    messageElement.textContent = "💥 You lost the game!";
    return;
  }
  score--;
  scoreElement.textContent = score;
  messageElement.textContent =
    userNumber < secretNumber ? "📉 too low" : "📈 too high";
}

function reset() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  bodyElement.style.backgroundColor = "#222";
  questionMarkElement.textContent = "?";
  questionMarkElement.style.padding = "4rem 5rem";
  guessElement.value = "";
  messageElement.textContent = "Start guessing...";
  scoreElement.textContent = "20";
}
