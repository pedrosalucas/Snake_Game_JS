import { updateSnake, drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js';
import { updateFood, drawFood} from './food.js';
import { outsideGrid } from './grid.js';

let lastRenderTime = 0 ;
let gameOver = false;
const gameBoard = document.querySelector('div#game-board');

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

function main(currentTime) {
    if(gameOver) {
        if(confirm('You Lose. Press OK to try again.')) {
            window.location = '/';
        }
        return;
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) {
        return;
    }

    lastRenderTime = currentTime;
    update();
    draw();
}

window.requestAnimationFrame(main); 