let inputDirection = { x: 0, y: 0 };
let lastIputDirection = { x: 0, y: 0};

window.addEventListener('keydown', e => {
    switch(e.key) {
        case 'ArrowUp':
            if(lastIputDirection.y !== 0 ) break;
            inputDirection = { x: 0, y: -1};
            break;
        case 'ArrowDown':
            if(lastIputDirection.y !== 0 ) break;
            inputDirection = { x: 0, y: 1};
            break;
        case 'ArrowRight':
            if(lastIputDirection.x !== 0 ) break;
            inputDirection = { x: 1, y: 0};
            break;
        case 'ArrowLeft':
            if(lastIputDirection.x !== 0 ) break;
            inputDirection = { x: -1, y: 0};
            break;
    }
})

export function getInputDirection() {
    lastIputDirection = inputDirection;
    return inputDirection;
}