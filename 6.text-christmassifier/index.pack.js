const greeting = document.getElementById("greeting");
const christmassifierBtn = document.getElementById("christmassifierBtn");
const audioPlayer = document.querySelector("audio");
christmassifierBtn.addEventListener("click", christmassifyName);

function christmassifyName() {
  // Task:
  // - Add christmassify class to greeting.
  greeting.classList.toggle("christmassified");
  //- Check whether christmassifierBtn has christmassify on it. If so, change text to "De-christmassify", if not, change text to "Christmassify"
  if (christmassifierBtn.innerText === "Christmassify") {
    christmassifierBtn.innerText = "De-christmassify";
    audioPlayer.play();
  } else {
    christmassifierBtn.innerText = "Christmassify";
    audioPlayer.load();
  }
}

// Stretch goals:
// - Play Christmas music when Christmas class is added.
// - Remove the Christmas class after a given time.
