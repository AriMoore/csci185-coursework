function drawCreature(x, y, size, fillColorA, fillColorB) {
    fill(fillColorA);
    circle(x, y, size);
    fill(fillColorB);
    circle(x, y, size/1.5);
    fill(fillColorA);
    triangle(x*1.5, y*1.15, x*1.5, y*.85, x*1.75, y);
    triangle(x*.5, y*1.15, x*.5, y*.85, x*0.25, y);
    triangle(x*1.15, y*0.5, x*.85, y*0.5, x, y*0.25);
    triangle(x*1.15, y*1.5, x*.85, y*1.5, x, y*1.75);
    triangle(x*.55, y*.75, x*.75, y*.55, x*.5, y*.45);
    triangle(x*1.45, y*.75, x*1.2, y*.55, x*1.5, y*.5);
    triangle(x*.8, y*1.45, x*.5, y*1.5, x*.55, y*1.2);
    triangle(x*1.55, y*1.55, x*1.45, y*1.2, x*1.25, y*1.45);
}

function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    drawCreature(100, 100, 100, 'yellow', 'brown');
    drawGrid(canvasWidth, canvasHeight);
}