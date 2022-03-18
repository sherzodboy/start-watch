"use strict";

const seconds = document.querySelector("#seconds");
const milliseconds = document.querySelector("#milliseconds");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let sec = 0;
let millisec = 0;
let timeInterval;

const timer = () => {
  millisec++;

  if (millisec < 9) {
    milliseconds.innerHTML = "0" + millisec;
  }

  if (millisec > 9) {
    milliseconds.innerHTML = millisec;
  }

  if (millisec > 99) {
    sec++;
    seconds.innerHTML = "0" + sec;
    millisec = 0;
    milliseconds.innerHTML = "0" + 0;
  }

  if (sec > 9) {
    seconds.innerHTML = sec;
  }
};

start.addEventListener("click", () => {
  timeInterval = setInterval(timer, 10);
});

stop.addEventListener("click", () => {
  clearInterval(timeInterval);
});

reset.addEventListener("click", () => {
  clearInterval(timeInterval);
  sec = "00";
  millisec = "00";
  seconds.innerHTML = sec;
  milliseconds.innerHTML = millisec;
});
