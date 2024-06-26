const gameboard = document.getElementById("game-board");
let food = addFood();
let snake = [{ x: 10, y: 10 }];
let direcrtion = "up";
let gameInterval;
let interval = 500;
let score = 0;
let hightScore = 0;

// event listener for key press
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      direcrtion = "up";
      break;
    case "ArrowDown":
      direcrtion = "down";
      break;
    case "ArrowLeft":
      direcrtion = "left";
      break;
    case "ArrowRight":
      direcrtion = "right";
      break;
  }
});

// main game function
function game() {
  drawFood();
  drawSnake();
  console.log("Snake.js loaded!");
}

// draw the snake
function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement("div", "snake");
    setElementposition(snakeElement, segment);
    gameboard.appendChild(snakeElement);
  });
}

// draw the food
function drawFood() {
  const foodElement = createGameElement("div", "food");
  setElementposition(foodElement, food);
  gameboard.appendChild(foodElement);
}

// move the snake
function moveSnake() {
  const head = { ...snake[0] };
  switch (direcrtion) {
    case "left":
      head.x--;
      break;
    case "up":
      head.y--;
      break;
    case "right":
      head.x++;
      break;
    case "down":
      head.y++;
      break;
  }
  snake.unshift(head);
  console.log(snake.unshift(head));
  if (head.x === food.x && head.y === food.y) {
    food = addFood();
    score++;
    clearInterval();
    gameInterval = setInterval(() => {
      moveSnake();
      game();
      checkGameOver();
    }, interval);
  } else {
    snake.pop();
  }
}

// check if the game is over
function checkGameOver() {
  if (snake.x < 1 || snake.x > 20 || snake.y < 1 || snake.y > 20) {
    console.log("Game Over!");
  }
}

// add food into the game
function addFood() {
  const x = Math.floor(Math.random() * 20) + 1;
  const y = Math.floor(Math.random() * 20) + 1;
  return { x, y };
}

// Helper functions
function setElementposition(element, position) {
  element.style.gridRowStart = position.y;
  element.style.gridColumnStart = position.x;
}

// Helper functions
function createGameElement(element, className) {
  const gameElement = document.createElement(element);
  gameElement.className = className;
  return gameElement;
}

game();
