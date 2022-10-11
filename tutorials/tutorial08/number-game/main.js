// code that picks a random number between 1 and 100:
const secret = Math.floor(Math.random() * 99) + 1;
document.querySelector('#secret').innerHTML = secret;

let count = 0;

function check() {
    count++;
    document.querySelector('#num-guesses').innerHTML = 'Number of guesses so far: ' + count;
    let guess = document.querySelector('#guess').value;
    guess = Number(guess);
    if (guess === secret) {
        document.querySelector('#message').innerHTML = 'You win!'
        document.querySelector('#celebrate').className = ''
    }
    else if (guess < secret) {
        document.querySelector('#message').innerHTML = 'Too low!'
        document.querySelector('#celebrate').className = 'hide'
    }
    else {
        document.querySelector('#message').innerHTML = 'Too high!'
        document.querySelector('#celebrate').className = 'hide'
    }
}