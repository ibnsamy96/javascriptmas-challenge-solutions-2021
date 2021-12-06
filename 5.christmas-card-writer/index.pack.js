const greetingDisplay = document.getElementById("greeting-display");
const btn = document.getElementById("btn");
const bauble = document.getElementById("bauble");
btn.addEventListener("click", writeGreeting);

const greetings = JSON.parse(localStorage.getItem("greetings")) || [
  "Santa Claus is coming to town!",
  "We wish you a Merry Christmas!",
  "Happy holidays!",
  "Ho, ho, ho! Merry Christmas!",
  "Jingle all the way!",
];

function generateRandomIndex(min, max) {
  return (max - min) * Math.random() + min;
}

function displayRandomGreeting() {
  const randomIndex = Math.floor(generateRandomIndex(0, greetings.length - 1));
  greetingDisplay.innerText = greetings[randomIndex];
}

displayRandomGreeting();

const greetingCard = document.querySelector(".card");
const inputCard = document.querySelector(".card.input");
const inputTextArea = document.querySelector("textarea");
function writeGreeting() {
  if (
    document.querySelector(".animate-input-card-in") &&
    inputTextArea.value.trim()
  ) {
    greetings.push(inputTextArea.value.trim());
    inputCard.classList.add("animate-input-card-out");
    btn.innerText = "Write card";
    btn.classList.remove("save");
    localStorage.setItem("greetings", JSON.stringify(greetings));
    setTimeout(() => {
      inputCard.classList.remove("animate-input-card-in");
      inputCard.classList.remove("animate-input-card-out");
      inputTextArea.value = "";
    }, 1000);
    return;
  } else {
    inputCard.classList.add("animate-input-card-in");
    btn.innerText = "Save your card";
    btn.classList.add("save");
    inputTextArea?.focus();
  }
}
