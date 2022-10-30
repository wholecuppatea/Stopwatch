window.onload = function() {

let seconds = 00;
let tens = 00;
let getSeconds = document.getElementById("seconds");
let getTens = document.getElementById("tens");
let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');
let resetButton = document.getElementById('resetButton');
let Interval;

startButton.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(incrementTimer, 10);
}

stopButton.onclick = function() {
    clearInterval(Interval);
}

resetButton.onclick = function() {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    getTens.innerHTML = tens;
    getSeconds.innerHTML = seconds;
}

function incrementTimer() {
    tens++

    if(tens <= 9) {
        getTens.innerHTML = "0" + tens;
    }

    if(tens > 9) {
        getTens.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++
        getSeconds.innerHTML = "0" + seconds;
        tens = 0;
        getTens.innerHTML = "00";
    }

    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
}

}