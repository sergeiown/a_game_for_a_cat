'use strict';

import { styles } from './style.js';
import { moveBall, hideBall } from './ball-evolution.js';

const styleSheet = document.createElement('style');
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

window.addEventListener('orientationchange', () => {
    location.reload();
});

const ball = document.getElementById('ball');

moveBall();
ball.addEventListener('click', hideBall);
