document.addEventListener("DOMContentLoaded", (event) => {
  const snake = { x: 10, y: 10 };

  const gameboard = document.getElementById("game-board");
  const snakeElement = document.createElement("div");
  snakeElement.className = "snake";
  const foodElement = document.createElement("div");
  foodElement.className = "food";

  function game() {
    drawFood();
    drawSnake();
    console.log("Snake.js loaded!");
  }

  function drawSnake() {
    snakeElement.style.gridRowStart = snake.y;
    snakeElement.style.gridColumnStart = snake.x;
    snakeElement.style.backgroundColor = "var(--cal-poly-green)";
    snakeElement.style.filter = "opacity(100%)";
    gameboard.appendChild(snakeElement);
  }

  function drawFood() {
    foodElement.style.gridRowStart = 1; //Math.floor(Math.random() * 20);
    foodElement.style.gridColumnStart = 1; //Math.floor(Math.random() * 20);

    foodElement.style.filter = "opacity(100%)";
    gameboard.appendChild(foodElement);
  }

  game();
});
