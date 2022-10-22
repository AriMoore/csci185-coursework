const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
    let i = 0;
    while (i < 1000) {
        const x = Math.random() * canvasWidth; //Const that gives a random X value based on screen size
        const y = Math.random() * canvasHeight; //Const that gives a random Y value based on screen size
        //Star Code
        /*
        strokeWeight(0); //Size of the line color
        fill('white'); //Fills the circle with the color white
        const width = Math.random() * 2 + 0.5; //Randomizes size
        circle(x, y, width); //Draws the circle
        i++; //Remove this line to get infinite bubbles
        */

        //Bubble Code
        strokeWeight(1); //Size of the line color
        stroke('white'); //Gives the circle a line color of white
        noFill(); //Makes the circle empty
        const width = Math.random() * 40 + 0.5; //Randomizes size
        circle(x, y, width); //Draws the circle
        i++; //Remove this line to get infinite bubbles
    }
}