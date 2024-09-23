const words = [
  'apple', 'banana', 'grape', 'orange', 'chocolate', 'coffee', 'tea', 'pencil', 
  'notebook', 'laptop', 'book', 'water', 'cloud', 'rain', 'sunshine', 
  'car', 'bicycle', 'chair', 'table', 'window', 'mirror', 'backpack', 
  'clock', 'blanket', 'pillow', 'towel', 'shoe', 'jacket', 'glasses'
];
let currentWord, scrambledWord, score = 0;

function selectRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function scrambleWord(word) {
  return word.split('').sort(() => Math.random() - 0.5).join('');
}

function displayScrambledWord() {
  currentWord = selectRandomWord();
  scrambledWord = scrambleWord(currentWord);
  document.getElementById('word').innerText = scrambledWord;
}

function checkGuess() {
  const guess = document.getElementById('guess').value.toLowerCase();
  if (guess === currentWord) {
    document.getElementById('message').innerText = 'Correct!';
    score++;
    document.getElementById('score').innerText = `Score: ${score}`;
    resetGame();
  } else {
    document.getElementById('message').innerText = 'Incorrect. Try again!';
  }
}

function resetGame() {
  setTimeout(() => {
    displayScrambledWord();
    document.getElementById('guess').value = '';
    document.getElementById('message').innerText = '';
  }, 1000);
}

// Event listener for Submit button
document.getElementById('submit').addEventListener('click', checkGuess);

// Event listener for pressing Enter key
document.getElementById('guess').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    checkGuess();
  }
});

// Event listener for new word
document.getElementById('new-word').addEventListener('click', () => {
  displayScrambledWord();
  document.getElementById('guess').value = '';
  document.getElementById('message').innerText = '';
});

// Event listener for dark mode toggle
document.getElementById('toggle-dark-mode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Initialize game
displayScrambledWord();
