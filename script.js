
const wordDisplay = document.getElementById('word');
const input = document.getElementById('text');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const endGameContainer = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const difficultySelect = document.getElementById('difficulty');


const words = [
    "dependent",
    "dog",
    "superficial",
    "admit",
    "juice",
    "javascript",
    "developer",
    "airplane",
    "great",
    "fun",
    "manipulate",
    "cat",
    "transition",
    "school",
    "computer",
    "programming",
    "drag",
    "loving",
    "north",
];


let score = 0;
let time = 5;
let timer;
let difficulty = difficultySelect.value;


startGame();


settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));
difficultySelect.addEventListener('change', (e) => difficulty = e.target.value);
input.addEventListener('input', checkInput);


function startGame() {
  score = 0;
  time = 10;
  updateScore();
  updateTimeDisplay();
  endGameContainer.innerHTML = '';
  input.value = '';
  input.focus();
  addWordToDOM();
  timer = setInterval(updateTime, 1000);
}


function addWordToDOM() {
  const randomIndex = Math.floor(Math.random() * words.length);
  wordDisplay.innerText = words[randomIndex];
}


function updateScore() {
  scoreDisplay.innerText = score;
}


function updateTimeDisplay() {
  timeDisplay.innerText = `${time}s`;
}


function updateTime() {
  time--;
  updateTimeDisplay();

  if (time <= 0) {
    clearInterval(timer);
    gameOver();
  }
}


function gameOver() {
  endGameContainer.innerHTML = `
    <h1>Game Over!</h1>
    <p>Your final score is ${score}</p>
    <button onclick="startGame()">Play Again</button>
  `;
  endGameContainer.style.display = 'block';
}


function checkInput() {
  if (input.value === wordDisplay.innerText) {
    score++;
    updateScore();
    addWordToDOM(); 
    input.value = '';


    if (difficulty === 'easy') {
      time += 5;
    } else if (difficulty === 'medium') {
      time += 3;
    } else if (difficulty === 'hard') {
      time += 2;
    }
    updateTimeDisplay();
  }
}
