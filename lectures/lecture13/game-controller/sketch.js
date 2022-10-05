let x = 100;
let y = 200;
let width = 50;
let fillColor = 'white';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

const moveController = ev => {
    if (ev.code == 'KeyW') {
        y = y - 2;
    }
    if (ev.code == 'KeyW' && ev.code == 'KeyA') {
        y = y - 2;
        x = x - 2;
    }
    if (ev.code == 'KeyW' && ev.code == 'KeyD') {
        y = y - 2;
        x = x + 2;
    }
    if (ev.code == 'KeyS') {
        y = y + 2;
    }
    if (ev.code == 'KeyS' && ev.code == 'KeyW') {
        y = y;
    }
    if (ev.code == 'KeyS' && ev.code == 'KeyA') {
        y = y + 2;
        x = x - 2;
    }
    if (ev.code == 'KeyS' && ev.code == 'KeyD') {
        y = y + 2;
        x = x + 2;
    }
    if (ev.code == 'KeyA') {
        x = x - 2;
    }
    if (ev.code == 'KeyA' && ev.code == 'KeyD') {
        x = x;
    }
    if (ev.code == 'KeyD') {
        x = x + 2;
    }
    if (ev.code == 'KeyD' && ev.code == 'KeyA') {
        x = x;
    }
    // redraw circle:
    clear();
    noFill();
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
