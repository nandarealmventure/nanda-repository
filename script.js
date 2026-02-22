let startBtn = document.getElementById("start-btn");
let textarea = document.getElementById("input-area");
let wordgrid = document.querySelector(".word-data");
let words = document.querySelectorAll(".showword");
let waktugame = document.getElementById("waktugame");
let containerDisplay = document.getElementById("container");
let displayword = document.getElementById("worddisplay");
let header = document.getElementsByClassName("header");
let results = document.querySelectorAll(".results");
let resultsobject = document.querySelectorAll(".results span");

let isgameActive = false;
let currentIndex = 0;
let startTime = 60;
let accuracy;
let timerGame;

startBtn.addEventListener("click", (clicks) => {
  isgameActive = true;
  intervalTime();
  showDisplay();
  startBtn.style.display = "none";
});

function showDisplay() {
  if (isgameActive === true) {
    wordgrid.style.display = "grid";
    textarea.removeAttribute("disabled");
    textarea.style.cursor = "default";
    textarea.focus();
  }
}

textarea.addEventListener("input", (userInput) => {
  if (isgameActive === true && currentIndex < words.length) {
    let word = words[currentIndex];
    if (userInput.target.value === word.textContent) {
      word.style.backgroundColor = "green";
      currentIndex++;
      userInput.target.value = "";

      if (currentIndex % 4 == 0 && currentIndex !== "akutidaksuka") {
        var barisperKata = Array.from(words).slice(
          currentIndex - 4,
          currentIndex,
        );
        if (currentIndex >= barisperKata.length) {
          barisperKata.forEach((plis) => {
            plis.style.display = "none";
          });
        }
      }

      if (currentIndex == words.length) {
        finishgamewithDone();
      }
    }
  }
});

function intervalTime() {
  if (isgameActive === true) {
    timerGame = setInterval(() => {
      startTime--;
      waktugame.textContent = "Waktu Masih : " + startTime;
      if (startTime == 0) {
        clearInterval(timerGame);
        isgameActive = false;
        finishgamewithtime();
      }
    }, 1000);
  }
}

function finishgamewithtime() {
  displayword.style.display = "none";
  textarea.style.display = "none";
  header[0].textContent = "hebat ini adalah poin kamu";
  results.forEach((element) => {
    element.style.display = "flex";
  });
  accuracy = Math.floor((currentIndex / words.length) * 100);
  resultsobject[1].textContent += accuracy + "%";
}

function finishgamewithDone() {
  isgameActive = false;
  clearInterval(timerGame);
  displayword.style.display = "none";
  textarea.style.display = "none";
  header[0].textContent = "hebat ini adalah poin kamu";
  results.forEach((element) => {
    element.style.display = "flex";
  });
  accuracy = Math.floor((currentIndex / words.length) * 100);
  resultsobject[1].textContent += accuracy + "%";
}
