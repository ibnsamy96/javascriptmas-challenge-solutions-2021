const countdownDisplay = document.getElementById("countdown-display");

function renderCountdown() {
  const christmas = 25;
  // Task:
  // - Get today's date (you only need the day).
  const today = new Date().getDate();
  // - Calculate remaining days.
  const remaining = christmas - today;
  // - Display remaining days in countdownDisplay.
  countdownDisplay.innerText = remaining;

  document.querySelector("#loader").style.opacity = 0;
}

renderCountdown();

document.querySelector(".cover").addEventListener("click", () => {
  document.querySelector("lottie-player").play();
  document.querySelector(".container").classList.toggle("opened");
});

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
