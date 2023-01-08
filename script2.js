'use strict';

const number = document.querySelector('.number');
const message = document.querySelector('.message');
const highscore = document.querySelector('.highscore');
const scoreDisplay = document.querySelector('.score');
const again = document.querySelector('.again');
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const body = document.querySelector('body');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let currentHighscore = 0;

again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  score = 20;
  scoreDisplay.textContent = score;
  guess.value = '';
  number.textContent = '?';
  message.textContent = 'Start guessing...';
});

check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = '⛔ No number';
  } else if (guess && highscore !== score) {
    if (guess === secretNumber) {
      message.textContent = '🎉You Won!';
      body.style.backgroundColor = '#60b347';
      number.style.width = '30rem';
      number.textContent = secretNumber;

      if (score > currentHighscore) {
        currentHighscore = score;
        highscore.textContent = currentHighscore;
      }
    } else if (guess !== secretNumber && score > 1) {
      score--;
      scoreDisplay.textContent = score;

      if (guess > secretNumber) {
        message.textContent = '📈 Too High';
      } else if (guess < secretNumber) {
        message.textContent = '📉 Too Low';
      }
    } else {
      score = 0;
      scoreDisplay.textContent = score;
      message.textContent = '💣 Game Over! ';
      body.style.backgroundColor = '#dc143c';
      number.textContent = secretNumber;
    }
  }
});
