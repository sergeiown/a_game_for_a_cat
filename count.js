const caughtCount = document.getElementById('count');
let caughtMiceCount = 0;

export default function countCaughtMice() {
    caughtMiceCount++;
    caughtCount.innerText = `Mice have been caught: ${caughtMiceCount}`;
}
