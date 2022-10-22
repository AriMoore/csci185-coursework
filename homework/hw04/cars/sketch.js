const c1 = {x: 100, y: 100, w: 200, speed: 2}, c2 = {x: 300, y: 300, w: 200, speed: -3}, cw = window.innerWidth, ch = window.innerHeight;

async function setup() {
    createCanvas(cw, ch);
}

function draw() {
    c1.x > cw+c1.w && (c1.x =- c1.w),
    c2.x < -c2.w && (c2.x = cw + c2.w),
    c1.x += c1.speed,
    c2.x += c2.speed,
    clear();
    noFill();
    drawCar(c1.x, c1.y, c1.w, "hotpink");
    drawCar(c2.x, c2.y, c2.w, "green");
    drawGrid(cw, ch);
}

function drawCar(c, e, w, i, n="black") {
    strokeWeight(0);
    fill(i);
    rect(c-w/4, e-(w/5+w/7), w/2, w/7);
    rect(c-w/2, e-w/5, w, w/5);
    fill(n);
    circle(c-w/4, e, w/6);
    circle(c+w/4, e, w/6);
    drawGrid(cw, ch);
}