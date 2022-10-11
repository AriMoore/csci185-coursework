const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

let x = 200;
let speed = 5;
let width = 50;
let fillColor = 'black';

function draw() {
    // frameRate(4);
    clear();

    if (x >= 500 - width/2) {
        speed *= -1;
        speed += speed*0.75;
    }
    else if (x <= 0 + width/2) {
        speed *= -1;
        speed += speed*0.75;
    }

    // draw walls:
    fill('red');
    rect(500, 300, 25, 200);

    // draw circle:
    fill(fillColor);
    circle(200, canvasHeight/2, width);
    x += speed;

    drawGrid(canvasWidth, canvasHeight);
}

const changeBallColor = ev => {
    console.log(ev.code);
    if (ev.code == 'KeyR') {
        fillColor = 'red'
    }
    else if (ev.code == 'KeyP') {
        fillColor = 'purple'
    }
    else if (ev.code == 'KeyB') {
        fillColor = 'black'
    }
}

// Add event listener on keydown
document.addEventListener('keydown', changeBallColor);