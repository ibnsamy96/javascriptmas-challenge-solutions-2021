// https://kse09g.deta.dev/search?query=mom

const items = [
  {
    item: "Candles",
    gif: "https://i.giphy.com/media/xT1R9GJnO14oW34dsQ/200.webp",
    isChecked: false,
  },
  {
    item: "Decorations",
    gif: "https://i.giphy.com/media/3o6ZtkjKdAuhaCFVoQ/200.webp",
    isChecked: false,
  },
  {
    item: "Chocolate",
    gif: "https://i.giphy.com/media/D2t94jSqtrVe0/200.webp",
    isChecked: true,
  },
];

const checklist = document.getElementById("checklist");
let center = 0;

updateUI();

const updateArray = (neededUpdate) => {
  if (neededUpdate === "before") {
    items.unshift(items.pop());
  } else if (neededUpdate === "next") {
    items.push(items.shift());
  }
  updateUI();
};

function updateUI() {
  checklist.innerHTML = "";
  items.forEach((element, index) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerText = element.item;
    item.style.setProperty("--imageURL", "url(" + element.gif + ")");
    if (index === 0) {
      item.classList.add("center");
      checklist.appendChild(item);
    } else if (index === 1) {
      item.classList.add("right");
      checklist.appendChild(item);
    } else if (index === items.length - 1) {
      item.classList.add("left");
      checklist.insertBefore(item, checklist.firstChild);
    }
  });
}

const before = document.querySelector(".checklist-before");
const next = document.querySelector(".checklist-next");

before.addEventListener("click", () => {
  //   console.log("before");
  updateArray("before");
});

next.addEventListener("click", () => {
  //   console.log("next");
  updateArray("next");
});
