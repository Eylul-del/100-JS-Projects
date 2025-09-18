let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;

// Format time as MM:SS
function formatTime(seconds) {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
}

// Update the timer display
function updateDisplay() {
  timerDisplay.textContent = formatTime(timeLeft);
}

// Start timer
startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        alert("Time's up! Take a break.");
      }
    }, 1000);
  }
});

// Stop timer
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

// Reset timer
resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 25 * 60;
  updateDisplay();
});

// Initialize display
updateDisplay();
