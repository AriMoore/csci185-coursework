let y = 200;

function sleep(ms=100) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    drawGrid(canvasWidth, canvasHeight);
    while (y < 450) {
        noFill();
        circle(100, y, 50);
        y += 50;
    }
}
