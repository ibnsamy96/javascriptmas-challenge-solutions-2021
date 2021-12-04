const greeting = document.getElementById("greeting");
const btn = document.getElementById("btn");

function fix() {
  document.querySelector(".container").style.fontFamily =
    "'Fredoka One', cursive";
  greeting.innerText = "Merry Christmas 🎉";
  document.body.style.backgroundColor = "var(--wine-red)";
  btn.remove();
}

btn.addEventListener("click", () => {
  const christmasTree = document.createElement("span");
  christmasTree.innerText = "🎄";

  const treeContainer = document.createElement("div");
  treeContainer.appendChild(christmasTree);

  treeContainer.classList.add("transition-container");

  document.body.appendChild(treeContainer);

  setTimeout(() => {
    treeContainer.classList.add("active");
  }, 50);
  setTimeout(() => {
    fix();
    treeContainer.classList.remove("active");
  }, 1600);
  setTimeout(() => {
    treeContainer.remove();
  }, 2700);
});
