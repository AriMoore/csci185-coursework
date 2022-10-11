/*
function drawCreaturearc(x, y, size, fillColorA, fillColorB, fillColorC='orange', fillColorD='black') {
    fill(fillColorA);
    arc(x, y*0.85, x*.75, y*.21, -9.425, -25.125, OPEN);
    arc(x*.625, y, size*.2625, size*.375, -4.7, -14.15, OPEN);
}
*/

function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    drawCreature(
        /*arca*/200, 212.5, 150, 52.5, -9.425, -25.125,
        /*arcb*/125, 250, 52.5, 75, -4.7, -14.15,
        /*arcc*/275, 250, 52.5, 75, -14.15, -4.7,
        /*arcd*/219, 190, 60, 90, -3.0, -14.05,
        /*arce*/222, 190, 52.5, 56.25, -3.0, -14.15,
        /*arcf*/200, 265, 120, 45, -25.125, -9.425,
        /*arcg*/200, 288.5, 150, 52.5, -25.125, -9.425,
        /*rect*/125, 212.5, 150, 75,
        /*triange1*/240, 225, 230.5, 245, 250.5, 245,
        /*triange2*/160, 225, 150.5, 245, 170.5, 245,
        /*triange3*/203, 168, 190, 186, 201, 185,
        /*triange4*/204, 167, 220, 162, 222, 146,
        /*colora/colorb/colorc/colord*/'orange', 'brown', 'white', 'black'
    );
    drawCreature(
        /*arca*/500, 200, 200, 70, -9.425, -25.125,
        /*arcb*/400, 250, 70, 100, -4.7, -14.15,
        /*arcc*/600, 250, 70, 100, -14.15, -4.7,
        /*arcd*/530, 170, 80, 120, -3.0, -14.05,
        /*arce*/535, 170, 70, 90, -3.0, -14.15,
        /*arcf*/500, 275, 150, 60, -25.125, -9.425,
        /*arcg*/500, 300, 200, 70, -25.125, -9.425,
        /*rect*/400, 200, 200, 100,
        /*triange1*/450, 215, 430, 245, 470, 245,
        /*triange2*/550, 215, 530, 245, 570, 245,
        /*triange3*/504, 147, 490, 165, 505, 165,
        /*triange4*/520, 129, 535, 111, 535, 129,
        /*colora/colorb/colorc/colord*/'red', 'green', 'white', 'beige'
    );
    drawCreature(
        /*arca*/350, 500, 300, 105, -9.425, -25.125,
        /*arcb*/200, 575, 105, 150, -4.7, -14.15,
        /*arcc*/500, 575, 105, 150, -14.15, -4.7,
        /*arcd*/390, 455, 105, 180, -3.0, -14.05,
        /*arce*/410, 455, 105, 135, -3.0, -14.15,
        /*arcf*/350, 600, 225, 90, -25.125, -9.425,
        /*arcg*/350, 650, 300, 105, -25.125, -9.425,
        /*rect*/200, 500, 300, 150,
        /*triange1*/275, 515, 245, 555, 305, 555,
        /*triange2*/425, 515, 395, 555, 455, 555,
        /*triange3*/338, 447, 368, 407, 357, 447,
        /*triange4*/367, 407, 399, 366, 406, 385,
        /*colora/colorb/colorc/colord*/'purple', 'yellow', 'white', 'blue'
    );
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:

function drawCreature (
    arcxa, arcya, arcwa, archa, arcstaa, arcstoa,
    arcxb, arcyb, arcwb, archb, arcstab, arcstob,
    arcxc, arcyc, arcwc, archc, arcstac, arcstoc,
    arcxd, arcyd, arcwd, archd, arcstad, arcstod,
    arcxe, arcye, arcwe, arche, arcstae, arcstoe,
    arcxf, arcyf, arcwf, archf, arcstaf, arcstof,
    arcxg, arcyg, arcwg, archg, arcstag, arcstog,
    rectx, recty, rectw, recth,
    trix1a, triy1a, trix2a, triy2a, trix3a, triy3a,
    trix1b, triy1b, trix2b, triy2b, trix3b, triy3b,
    trix1c, triy1c, trix2c, triy2c, trix3c, triy3c,
    trix1d, triy1d, trix2d, triy2d, trix3d, triy3d,
    fillColorA, fillColorB, fillColorC, fillColorD
    ) {
    fill(fillColorA);
    arc(arcxg, arcyg, arcwg, archg, arcstag, arcstog, OPEN);
    arc(arcxa, arcya, arcwa, archa, arcstaa, arcstoa, OPEN);
    arc(arcxb, arcyb, arcwb, archb, arcstab, arcstob, OPEN);
    arc(arcxc, arcyc, arcwc, archc, arcstac, arcstoc, OPEN);
    fill(fillColorB);
    arc(arcxd, arcyd, arcwd, archd, arcstad, arcstod, OPEN);
    fill(fillColorC);
    arc(arcxe, arcye, arcwe, arche, arcstae, arcstoe, OPEN);
    fill(fillColorA);
    rect(rectx, recty, rectw, recth);
    fill(fillColorD);
    triangle(trix1a, triy1a, trix2a, triy2a, trix3a, triy3a);
    triangle(trix1b, triy1b, trix2b, triy2b, trix3b, triy3b);
    fill(fillColorB);
    triangle(trix1c, triy1c, trix2c, triy2c, trix3c, triy3c);
    triangle(trix1d, triy1d, trix2d, triy2d, trix3d, triy3d);
    fill(fillColorD);
    arc(arcxf, arcyf, arcwf, archf, arcstaf, arcstof, OPEN);
}