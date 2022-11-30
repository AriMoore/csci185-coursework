// inspired by: https://p5js.org/examples/motion-bouncy-bubbles.html

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

const player = {x: canvasWidth/2, y: canvasHeight, d: 200, color: 'hotpink', originalColor: 'hotpink' };

const circleData = [
    {x: 500, y: 550, d: 40, speedX: 3, speedY: 3, color: 'teal', originalColor: 'teal'},
];

const leftWall = {x: 0, y: 0, w: 10, h: canvasHeight, color: 'white'};
const rightWall = {x: canvasWidth/1.005, y: 0, w: 10, h: canvasHeight, color: 'white'};
const topWall = {x: 0, y: 0, w: canvasWidth/1.005, h: 10, color: 'white'};

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

let bricks = [];
let brickx = 10;
let bricky = 10;
let speed = 15;
let score = 0;
let win = false;
let lose = false;
let brickcount = bricks.length;
let x = 0;
let y = 0;
let d = 50;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    for (let i = 0; i < 9; i++) {
        let row = [];
        bricks.push(row);
        for (let j = 0; j < 32; j++) {
            row.push({x: brickx + j*60, y: bricky, brickw: 60, brickh: 30, visible: true, color: random_hex_color_code()});
        }
        bricky += 30;
    }
    brickcount = 284;
}

function draw() {
    clear();
    player.color = player.originalColor;
    let ball = circleData[0];
    for (let i = 0; i < 9; i++) {
        let row = bricks[i];
        for (let j = 0; j < 32; j++) {
            let cell = row[j];
            let horizontalintersects = checkVerticalBrickIntersection(cell, ball);
            let verticalintersects = checkVerticalBrickIntersection(cell, ball);
            if (verticalintersects && cell.visible == true) {
                cell.visible = false;
                score += 1;
                brickcount -= 1;
                if (brickcount == 0) {
                    win = true;
                }
                ball.speedY *= -1;
                ball.y += ball.speedY;
                brickcount -= 1;
                score += 1;
            }
            if (horizontalintersects && cell.visible == true) {
                cell.visible = false;
                score += 1;
                brickcount -= 1;
                if (brickcount == 0) {
                    win = true;
                }
                ball.speedX *= -1;
                ball.x += ball.speedX;
                brickcount -= 1;
                score += 1;
            }
            if (cell.visible) {
                fill(cell.color);
                rect(cell.x, cell.y, cell.brickw, cell.brickh);
            }
        }
    }
    if (brickcount === 0) {
        win = true;
    }
    if (lose == true) {
        fill('White');
        text("You Lose", canvasWidth/2, canvasHeight/3);
        textSize(22);
        textFont('Helvetica');
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        document.querySelector("#lose").className = "showlose";
        document.querySelector('#lose').style.left = canvasWidth/2 - 200 + "px";
    }
    else if (win == true) {
        fill('White');
        text("You Win", canvasWidth/2, canvasHeight/2);
        textSize(22);
        textFont('Helvetica');
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        document.querySelector("#win").className = "showwin";
    }
    else {
        fill('White');
        text("Score: "+score, canvasWidth/2, canvasHeight/2);
        textSize(22);
        textFont('Helvetica');
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
    }
    console.log(score, brickcount, win, lose);
    //ball
    bounceIfIntersects(ball, player);
    move(ball); 
    fill(ball.color);
    circle(ball.x, ball.y, ball.d);
    //white walls
    fill(leftWall.color);
    rect(leftWall.x, leftWall.y, leftWall.w, leftWall.h);
    fill(rightWall.color);
    rect(rightWall.x, rightWall.y, rightWall.w, rightWall.h);
    fill(topWall.color);
    rect(topWall.x, topWall.y, topWall.w, topWall.h);
    fill(player.color);
    circle(player.x, player.y, player.d);
    const isIntersectedLeft = checkIntersectionLeft (
        player.x - player.d/2,
        leftWall.x + leftWall.w,
        leftWall.w
    );
    const isIntersectedRight = checkIntersectionRight (
        player.x + player.d/2, 
        rightWall.x,
        rightWall.w
    );
    if (isIntersectedLeft) {
        leftWall.color = 'red';
    } 
    else {
        leftWall.color = 'white';
    }
    if (isIntersectedRight) {
        rightWall.color = 'red';
    } 
    else {
        rightWall.color = 'white';
    }
}

function checkIntersectionLeft(x1, x2, d) {
    if ((x1-x2) <= 0 
    && Math.abs(x1-x2) < d) {
        return true;
    } 
    else {
        return false;
    }
}

function checkIntersectionRight(x1, x2, d) {
    if ((x1-x2) >= 0 
    && Math.abs(x1-x2) < d) {
        return true;
    } 
    else {
        return false;
    }
}

function checkHorizontalBrickIntersection(brick, ball) {
    let hi = false;
    let vi = false;
    if ((brick.x - brick.brickw) < ball.x && (brick.x + brick.brickw) > ball.x) {
        hi = true;
    }
    if ((brick.y - brick.brickh) <= ball.y && (brick.y + brick.brickh) >= ball.y) {
        vi = true;
    }
    return hi && vi;
}

function checkVerticalBrickIntersection(brick, ball) {
    let hi = false;
    let vi = false;
    if ((brick.x - brick.brickw/2) < ball.x && (brick.x + brick.brickw/2) > ball.x) {
        hi = true;
    }
    if ((brick.y - brick.brickh) <= ball.y && (brick.y + brick.brickh) >= ball.y) {
        vi = true;
    }
    return hi && vi;
}

function bounceIfIntersects(ball1, ball2) {
    let spring = 1;
    let minDist = ball1.d/2 + ball2.d/2;
    let dx = ball2.x - ball1.x;
    let dy = ball2.y - ball1.y;
    const distance = dist(ball1.x, ball1.y, ball2.x, ball2.y);
    if (distance <= minDist) {
        let angle = atan2(dy, dx);
        let targetX = ball1.x + cos(angle) * minDist;
        let targetY = ball1.y + sin(angle) * minDist;
        let ax = (targetX - ball2.x) * spring;
        let ay = (targetY - ball2.y) * spring;
        ball1.speedX -= ax;
        ball1.speedY -= ay;
        ball1.speedX /= 1;
        ball1.speedY /= 1;
    }
}

function move(ball) {
    ball.y += ball.speedY;
    ball.x += ball.speedX;
    if ((ball.x - ball.d / 2)<= 0) {
        ball.speedX *= -1;
        ball.x += ball.speedX;
    } 
    else if ((ball.x + ball.d / 2) >= canvasWidth) {
        ball.speedX *= -1;
        ball.x += ball.speedX;
    } 
    else if ((ball.y - ball.d / 2) <= 0) {
        ball.speedY *= -1;
        ball.y += ball.speedY;
    }
    /* Enable this to reenable floor collision
    else if (ball.y + ball.d / 2 >= canvasHeight) {
        lose = true;
    }
    //Enable this to enable bottom collision
    /*
    else if (ball.y + ball.d / 2 >= canvasHeight) {
        ball.speedY *= -1;
        ball.y += ball.speedY;
    }
    */
    else if (ball.y - 40 >= canvasHeight) {
        lose = true;
    }
}

function moveCharacter(ev) {
    if (ev.code == 'ArrowLeft') {
        if (leftWall.color === 'red') {
            return;
        }
        player.speed *= speed; 
        player.x -= speed;
    } 
    else if (ev.code == 'ArrowRight') {
        if (rightWall.color === 'red') {
            return;
        }
        player.speed *= player.speed;
        player.x += speed;
    }
}

function checkWinCondition(win, lose) {
    if (win == true) {
        document.querySelector('#message').innerHTML = 'You win!'
        document.querySelector('#condition').className = ''
    }
    else if (lose == true) {
        document.querySelector('#message').innerHTML = 'You lose!'
        document.querySelector('#condition').className = 'lose'
    }
    else {
        document.querySelector('#message').innerHTML = ''
        document.querySelector('#condition').className = 'gameactive'
    }
}

document.addEventListener('keydown', moveCharacter);