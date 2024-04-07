'use strict';

const caughtCount = document.getElementById('count');
let caughtMiceCount = 0;

function loadCaughtMiceCount() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'caughtMiceCount') {
            return parseInt(value) || 0;
        }
    }
    return 0;
}

export default function countCaughtMice() {
    caughtMiceCount = loadCaughtMiceCount();
    caughtMiceCount++;
    document.cookie = `caughtMiceCount=${caughtMiceCount}; expires=Session`;
    caughtCount.innerText = `Mice have been caught: ${caughtMiceCount}`;
}
