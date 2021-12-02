const body = document.getElementById("body");
const greeting = document.getElementById("greeting");
const themeBtns = document.querySelectorAll("input[name='theme']");
// const snowBtn = document.getElementById("snow");

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.
let theme = "christmas";
themeBtns.forEach((christmasBtn) => {
  christmasBtn.addEventListener("change", (event) => {
    document.body.classList.toggle(theme);
    document.body.classList.toggle(christmasBtn.value);
    greeting.querySelector("span").innerText = christmasBtn.dataset.icon;
    theme = christmasBtn.value;
  });
});

// Stretch goals:
// - Add more themes!
// - Allow the user to customize the themes.
// - Turn the radio buttons into a toggle switch.
