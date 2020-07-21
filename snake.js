import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 4;
const snakeBody = [{ x: 10, y: 11 }];
let newSegments = 0;

export function updateSnake() {
    addSegments();
    const inputDirection = getInputDirection();
    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] };
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function drawSnake(gameBoard) {
    snakeBody.forEach(segment => {
        const sankeElement = document.createElement('span');
        sankeElement.style.gridRowStart = segment.y;
        sankeElement.style.gridColumnStart = segment.x;
        sankeElement.classList.add('snake');
        gameBoard.appendChild(sankeElement);
    })
}

export function getSnakeHead() {
    return snakeBody[0];
}

export function expandSnake(amount) {
    newSegments += amount;
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some( (segment, index) => {
        if(ignoreHead && index === 0) return false;
        return equalPositions(segment, position);
    })
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegments() {
    for(let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }
    newSegments = 0;
}


