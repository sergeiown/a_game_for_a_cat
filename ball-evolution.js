'use strict';

import countCaughtMice from './count.js';
import playSound from './sound.js';

const ball = document.getElementById('ball');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let x = Math.random() * screenWidth;
let y = Math.random() * screenHeight;
let xSpeed = 5;
let ySpeed = 5;
let color = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
while (parseInt(color.substring(1), 16) < parseInt('1c1c1c', 16)) {
    console.log(`Prevented the use of color ${color}`);
    color = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
}
let timeout = null;

function moveBall() {
    x += xSpeed;
    y += ySpeed;

    const rotation = Math.atan2(ySpeed, xSpeed);
    ball.style.transform = `rotate(${rotation + 11}rad)`;

    if (x + ball.clientWidth > screenWidth || x < 0) {
        x = Math.max(Math.min(x, screenWidth - ball.clientWidth), 0);
        xSpeed = -xSpeed;
    }

    if (y + ball.clientHeight > screenHeight || y < 0) {
        y = Math.max(Math.min(y, screenHeight - ball.clientHeight), 0);
        ySpeed = -ySpeed;
    }

    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
    ball.style.backgroundColor = color;
    ball.style.boxShadow = `0 0 15px 5px ${color}`;

    requestAnimationFrame(moveBall);
}

function hideBall() {
    clearTimeout(timeout);
    ball.style.display = 'none';

    countCaughtMice();

    playSound();

    timeout = setTimeout(() => {
        ball.style.display = 'block';
        x = Math.random() * screenWidth;
        y = Math.random() * screenHeight;

        color = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
        while (parseInt(color.substring(1), 16) < parseInt('1c1c1c', 16)) {
            console.log(`Prevented the use of color ${color}`);
            color = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
        }

        xSpeed = Math.random() * 10;
        ySpeed = Math.random() * 10;

        if (xSpeed < 5) {
            xSpeed += 5;
        }

        if (ySpeed < 5) {
            ySpeed += 5;
        }

        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200]);
        }

        console.log(`xSpeed: ${Math.round(xSpeed, 0)}`);
        console.log(`ySpeed: ${Math.round(ySpeed, 0)}`);
    }, 1000);
}

export { moveBall, hideBall };
