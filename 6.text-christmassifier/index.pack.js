const greeting = document.getElementById("greeting");
const christmassifierBtn = document.getElementById("christmassifierBtn");
const audioPlayer = document.querySelector("audio");
christmassifierBtn.addEventListener("click", christmassifyName);

function christmassifyName() {
  greeting.classList.toggle("christmassified");
  if (christmassifierBtn.innerText === "Christmassify") {
    christmassifierBtn.innerText = "De-christmassify";
    audioPlayer.play();
  } else {
    christmassifierBtn.innerText = "Christmassify";
    audioPlayer.load();
  }
}
