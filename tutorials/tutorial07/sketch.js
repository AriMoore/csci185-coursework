function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(/*x*/100, /*y*/100, /*size*/100, /*color*/'hotpink');
    drawCircle(/*x*/200, /*y*/100, /*size*/40, /*color*/'navy');
    drawCircle(/*x*/300, /*y*/100, /*size*/100, /*color*/'teal');
    drawCircle(/*x*/400, /*y*/100, /*size*/40, /*color*/'hotpink');

    // Exercise 2: 
    drawOval(/*posx*/100, /*posy*/200, /*sizex*/100, /*sizey*/62.5, /*color*/'teal');
    drawOval(/*posx*/200, /*posy*/200, /*sizex*/62.5, /*sizey*/100, /*color*/'hotpink');
    drawOval(/*posx*/300, /*posy*/200, /*sizex*/100, /*sizey*/62.5, /*color*/'navy');
    drawOval(/*posx*/400, /*posy*/200, /*sizex*/62.5, /*sizey*/100, /*color*/'teal');

    // Exercise 3:
    drawBullseye(/*posx*/100, /*posy*/300, /*size*/100, /*colora*/'teal', /*colorb*/'navy');
    drawBullseye(/*posx*/200, /*posy*/300, /*size*/40, /*colora*/'teal', /*colorb*/'navy');
    drawBullseye(/*posx*/300, /*posy*/300, /*size*/100, /*colora*/'teal', /*colorb*/'navy');
    drawBullseye(/*posx*/400, /*posy*/300, /*size*/40, /*colora*/'teal', /*colorb*/'navy');

    // Exercise 4:
    drawFace(/*posxmain*/100, /*posxa*/92, /*posxb*/108, /*arcx*/100, /*posya*/400, /*posyb*/392, /*arcy*/400, /*sizea*/50, /*sizeb*/8, /*arcw*/30, /*arch*/30, /*arcsta*/0.5, /*arcsto*/-10, /*colora*/'white', /*colorb*/'black');
    drawFace(/*posxmain*/200, /*posxa*/184, /*posxb*/216, /*arcx*/200, /*posya*/400, /*posyb*/384, /*arcy*/400, /*sizea*/100, /*sizeb*/16, /*arcw*/60, /*arch*/60, /*arcsta*/0.5, /*arcsto*/-10, /*colora*/'white', /*colorb*/'black');
    drawFace(/*posxmain*/300, /*posxa*/292, /*posxb*/308, /*arcx*/300, /*posya*/400, /*posyb*/392, /*arcy*/400, /*sizea*/50, /*sizeb*/8, /*arcw*/30, /*arch*/30, /*arcsta*/0.5, /*arcsto*/-10, /*colora*/'white', /*colorb*/'black');
    drawFace(/*posxmain*/400, /*posxa*/384, /*posxb*/416, /*arcx*/400, /*posya*/400, /*posyb*/384, /*arcy*/400, /*sizea*/100, /*sizeb*/16, /*arcw*/60, /*arch*/60, /*arcsta*/0.5, /*arcsto*/-10, /*colora*/'white', /*colorb*/'black');
    drawGrid(canvasWidth, canvasHeight);
}

function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY);
}

function drawBullseye(centerX, centerY, size, fillColorA, fillColorB) {
    fill(fillColorA);
    circle(centerX, centerY, size);
    fill(fillColorB);
    circle(centerX, centerY, size*.75);
    fill(fillColorA);
    circle(centerX, centerY, size*.5);
    fill(fillColorB);
    circle(centerX, centerY, size*.25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerXMain, centerXA, centerXB, arcX, centerYA, centerYB, arcY, sizeA, sizeB, arcW, arcH, arcSTA, arcSTO, fillColorA, fillColorB) {
    fill(fillColorA);
    circle(centerXMain, centerYA, sizeA);
    arc(arcX, arcY, arcW, arcH, arcSTA, arcSTO, OPEN);
    fill(fillColorB);
    circle(centerXA, centerYB, sizeB);
    fill(fillColorB);
    circle(centerXB, centerYB, sizeB);
}
