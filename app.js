/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(e) {
  let guess = parseInt(guessInput.value);

  // Validate
  if(isNaN(guess) || guess < min || guess>max) {
    console.log(guess);
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if(guess === winningNum) {
    // Game over - won
    gameOver(true, `${winningNum} is correct! YOU WIN!`);
  } else {

    guessesLeft -= 1;

    if(guessesLeft == 0) {
      // Game over - lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);

    } else {
      // Change border color
      guessInput.style.borderColor = 'red';

      // Clear Input
      guessInput.value = '';

      // Game continues - answer wrong
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }

  }
});

// gameOver function
function gameOver(won, msg) {
  let color;
  won ? color='green': color='red';

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Game over - won
  setMessage(msg, color);

}

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}