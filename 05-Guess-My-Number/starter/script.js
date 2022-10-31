'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess)

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  }
  // if player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if(score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // score++;
    // document.querySelector('.score').textContent = score;
  }
  // when guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Coding Challenge #1

// Implement a game rest functionality, so that player can make a new huess! Here's how:

// 1. Select the element with the 'again' class and attach a click event handler

document.querySelector('.again').addEventListener('click', function () {
  // 2. In the handler function, restore initial values of the score and number variables
  score = 20;
  // not sure what the number variables are
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // 3. Restore the initial conditions of the message, number, score, and guess input field
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  // idk how to restore the initial conditions of guess input field

  //4. Also restore the original background color (#222) and number width (15rem)
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
