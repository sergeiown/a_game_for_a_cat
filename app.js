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

function hideBall() {
    clearTimeout(timeout);
    ball.style.display = 'none';
    timeout = setTimeout(() => {
        ball.style.display = 'block';
        x = Math.random() * screenWidth;
        y = Math.random() * screenHeight;

        let color = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
        while (color === '#1c1c1c') {
            color = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
        }
    }, 1000);
}

moveBall();
ball.addEventListener('click', hideBall);
