let mins = document.getElementById("mins");
let seconds = document.getElementById("seconds");
let tens = document.getElementById("tens");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let interval;
let Minute = 0;
let Seconds = 0;
let Tens = 0;
start.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});
stop.addEventListener("click", () => {
  clearInterval(interval);
});
reset.addEventListener("click", () => {
  tens.innerHTML = "00";
  seconds.innerHTML = "00";
  mins.innerHTML = "00";
});
function startTimer() {
  Tens++;
  tens.innerHTML = "0" + Tens;
  if (Tens > 9) {
    tens.innerHTML = Tens;
  }
  if (Tens > 99) {
    Seconds++;
    seconds.innerHTML = '0' + Seconds;
    Tens = 0;
    tens.innerHTML = "00";
  }
  if (Seconds > 9) {
    seconds.innerHTML = Seconds;
  }
  if (Seconds > 59) {
    Minute++;
    mins.innerHTML = "0" + Minute;
    Seconds = 0;
    seconds.innerHTML = "00";
  }
  if (Minute > 9) {
    mins.innerHTML = Minute;
  }
}