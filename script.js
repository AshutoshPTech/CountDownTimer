let intervalId;
let countdownSeconds = 60;
const countdownSpan = document.getElementById('countdown');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const setBtn = document.getElementById('setBtn');
const restartBtn = document.getElementById('restartBtn');
const timerInput = document.getElementById('timerInput');

function updateTimer() {
  countdownSpan.innerText = formatTime(countdownSeconds);
  countdownSeconds--;

  if (countdownSeconds < 0) {
    clearInterval(intervalId);
    alert("Time's up!");
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

startBtn.addEventListener('click', () => {
  if (!intervalId) {
    intervalId = setInterval(updateTimer, 1000);
  }
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
});

resetBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  countdownSeconds = 60;
  countdownSpan.innerText = formatTime(countdownSeconds);
});

setBtn.addEventListener('click', () => {
  const newTime = parseInt(timerInput.value);
  if (!isNaN(newTime) && newTime > 0) {
    countdownSeconds = newTime;
    countdownSpan.innerText = formatTime(countdownSeconds);
    timerInput.value = '';
  } else {
    alert('Please enter a valid positive number.');
  }
});

restartBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  countdownSpan.innerText = formatTime(countdownSeconds);
});
