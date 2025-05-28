const scoops = {
  scoop1: document.querySelector(".scoop1"),
  scoop2: document.querySelector(".scoop2"),
  scoop3: document.querySelector(".scoop3"),
};
const buttons = {
  scoop1: document.getElementById("btn-scoop1"),
  scoop2: document.getElementById("btn-scoop2"),
  scoop3: document.getElementById("btn-scoop3"),
  topping1: document.getElementById("btn-topping1"),
  topping2: document.getElementById("btn-topping2"),
};

const colors = [
  "#F45C96",
  "#F8BD3D",
  "#badc58",
  "#5C0003",
  "#F58619",
  "#EBAB70",
];

const counters = {
  scoop1: 0,
  scoop2: 0,
  scoop3: 0,
  topping1: 0,
  topping2: 0,
};

const genNextColorIndex = (current) =>
  current < colors.length - 1 ? current + 1 : 0;

buttons.scoop1.addEventListener("click", () => {
  scoops.scoop1.style.backgroundColor = colors[counters.scoop1];
  counters.scoop1 = genNextColorIndex(counters.scoop1);
});
buttons.scoop2.addEventListener("click", () => {
  scoops.scoop2.style.backgroundColor = colors[counters.scoop2];
  counters.scoop2 = genNextColorIndex(counters.scoop2);
});
buttons.scoop3.addEventListener("click", () => {
  scoops.scoop3.style.backgroundColor = colors[counters.scoop3];
  counters.scoop3 = genNextColorIndex(counters.scoop3);
});
buttons.topping1.addEventListener("click", () => {
  scoops.scoop1.style.backgroundImage = `radial-gradient(circle at 20px 18px, ${
    colors[counters.topping1]
  } 25px,transparent 25px)`;
  counters.topping1 = genNextColorIndex(counters.topping1);
});
buttons.topping2.addEventListener("click", () => {
  scoops.scoop3.style.backgroundImage = `radial-gradient(circle at 12.5px 17px, ${
    colors[counters.topping2]
  } 20px,transparent 21px)`;
  counters.topping2 = genNextColorIndex(counters.topping2);
});