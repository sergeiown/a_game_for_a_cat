const caughtCount = document.getElementById('count');
let caughtMiceCount = 0;

export default function countCaughtMice() {
    caughtMiceCount++;
    caughtCount.innerText = `Mice have already been caught: ${caughtMiceCount}`;
}
