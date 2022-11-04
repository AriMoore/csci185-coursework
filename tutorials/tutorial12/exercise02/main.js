const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawGrid(canvasWidth, canvasHeight);
    drawShape(100, 100, 100, 'black', 'white');
    drawShape(200, 200, 80, 'red', 'green');
    drawShape(350, 700, 260, 'blue', 'gold');
    drawShape(520, 320, 460, 'beige', 'silver');
    drawShape(680, 530, 60, 'yellow', 'brown');
}

// function definition goes here:
async function drawShape(x, y, s, c1, c2) {
    fill(c1);
    circle(x, y, s);
    fill(c2);
    circle(x, y, s/2);
}
