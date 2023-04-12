'use strict';

export default function playSound() {
    const audio = document.createElement('audio');
    audio.setAttribute('src', 'mouse.mp3');
    audio.play();
}
