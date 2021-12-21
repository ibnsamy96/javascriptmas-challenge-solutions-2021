const inputs = document.querySelectorAll(".controls input");
const pupilColor = "#000";

inputs.forEach((input) => {
  input.addEventListener("change", updateColor);
});

const elementsClasses = {
  color: "eye",
  color2: "button",
  color3: "nose",
};

function updateColor(event) {
  const target = event.target.id;
  const color = event.target.value;
  const elClass = elementsClasses[target];
  document.querySelectorAll("." + elementsClasses[target]).forEach((item) => {
    item.style.setProperty(`--${target}`, color);
  });
  if (elClass === "eye") {
    checkContrast(color.slice(1), pupilColor.slice(1)).then((state) => {
      console.log(state);
      document.body.style.backgroundColor = state === "pass" ? "green" : "red";
      alert(`You ${state}ed in choosing good eye contrast!`);
    });
  } else {
    document.body.style.backgroundColor = "";
  }
}

async function checkContrast(eyeColor, pupilColor) {
  const response = await fetch(
    `https://webaim.org/resources/contrastchecker/?fcolor=${pupilColor}&bcolor=${eyeColor}&api`
  );
  const data = await response.json();
  return data["AA"];
}
