const ball = document.getElementById('ball');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let x = Math.random() * screenWidth;
let y = Math.random() * screenHeight;
let xSpeed = 5;
let ySpeed = 5;
let color = '#ff0000';
let timeout = null;
