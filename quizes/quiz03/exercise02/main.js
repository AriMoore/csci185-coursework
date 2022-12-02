const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawMonster(100, 100, 150, '#0bc9cd', false);
    drawMonster(300, 200, 75, '#8093f1', true);
    drawMonster(100, 325, 100, '#8093f1', false);
    drawMonster(250, 375, 125, '#7fb285', true);
    drawMonster(550, 200, 250, '#7fb285', false);    
    drawGrid(canvasWidth, canvasHeight);
}

function drawMonster(x, y, size, fillColorA, bool) {
    fill(fillColorA);
    rect(x, y, size, size);
    fill("white");
    rect(x+(size/1.65), y+(size/5), size/5, size/5);
    rect(x+(size/4.75), y+(size/5), size/5, size/5);
    fill("black");
    rect(x+(size/1.525), y+(size/3.4), size/10, size/10);
    rect(x+(size/3.9), y+(size/3.4), size/10, size/10);
    if (bool === false) {
        rect(x+(size/4.5), y+(size/1.75), size/1.75, size/6);
    }
    else {
        rect(x+(size/2.75), y+(size/1.75), size/3.5, size/6);
    }
}