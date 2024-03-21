"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let score = 20;
let highscore = 0;

const button = document.querySelector(".check");

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";

  // css Style
  document.querySelector("body").style.backgroundColor = "#222";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("❌No Number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉Correct Number🎉");
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // css Style
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // When guess is too height or too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        (document.querySelector(".message").textContent =
          guess > secretNumber ? "📈Too hight!📈" : "📉Too low📉")
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥You lost the game💥");
      document.querySelector(".score").textContent = 0;
    }
  }
});
