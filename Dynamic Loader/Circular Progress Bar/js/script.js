const progressBar = document.querySelector(".circular-progress");
const valueText = document.querySelector(".progress-value");

let start = 0;
const end = 99;
const speed = 100;

const interval = setInterval(() => {
  start++;
  valueText.textContent = `${start}%`;
  progressBar.style.background = `conic-gradient(#7d2ae8 ${
    start * 3.6
  }deg, #dcdcdc 0deg)`;

  if (start >= end) clearInterval(interval);
}, speed);
