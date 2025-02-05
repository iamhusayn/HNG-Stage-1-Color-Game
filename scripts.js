const colorBox = document.getElementById("colorBox");
const colorOptionsContainer = document.getElementById("options");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

let score = 0;
let targetColor = "";

function generateRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)})`;
}

function startGame() {
  let colors = [];
  for (let i = 0; i < 6; i++) {
    colors.push(generateRandomColor());
  }

  targetColor = colors[Math.floor(Math.random() * 6)];
  colorBox.style.backgroundColor = targetColor;

  colorOptionsContainer.innerHTML = "";
  gameStatus.textContent = "";

  colors.forEach((color) => {
    const button = document.createElement("button");
    button.style.backgroundColor = color;
    button.setAttribute("data-testid", "options");
    button.addEventListener("click", () => checkAnswer(color));
    colorOptionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedColor) {
  if (selectedColor === targetColor) {
    gameStatus.textContent = "You are correct Champ!";
    score++;
    scoreDisplay.textContent = score;
  } else {
    gameStatus.textContent = "You're Wrong! Try Again.";
  }
}

newGameButton.addEventListener("click", startGame);

startGame();
