const ball = document.getElementById('ball');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let x = Math.random() * screenWidth;
let y = Math.random() * screenHeight;
let xSpeed = 5;
let ySpeed = 5;
let color = '#ff0000';
let timeout = null;

function moveBall() {
    x += xSpeed;
    y += ySpeed;

    if (x + ball.clientWidth > screenWidth || x < 0) {
        xSpeed = -xSpeed;
    }

    if (y + ball.clientHeight > screenHeight || y < 0) {
        ySpeed = -ySpeed;
    }

    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
    ball.style.backgroundColor = color;
    ball.style.boxShadow = `0 0 10px 10px ${color}`;

    requestAnimationFrame(moveBall);
}
