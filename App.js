"use strict";

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const currentTag0El = document.querySelector(".tag-current0");
const currentTag1El = document.querySelector(".tag-current1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const diceEl = document.querySelector(".dice");

diceEl.classList.add("hidden");

score0El.textContent = 0;
score1El.textContent = 0;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isPlaying = true;

btnRoll.addEventListener("click", function () {
  if (isPlaying) {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${randomNumber}.png`;

    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch Player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (isPlaying) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      console.log("enter in 20");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      isPlaying = false;
    } else {
      switchPlayer();
    }
  }
});

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  currentTag0El.classList.toggle("hidden");
  currentTag1El.classList.toggle("hidden");
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
  activePlayer = activePlayer == 1 ? 0 : 1;
}
