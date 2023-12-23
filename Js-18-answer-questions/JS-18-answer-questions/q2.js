/*
  todo 1: generate a random color using Math and rgb
  todo 2: add a div and change the background color when user brings the mouse over the div
*/

// ! ========== Answers ==========

const hoverDiv = document.querySelector("#hover");

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgbColor = `rgb(${r},${g},${b})`;
  return rgbColor;
}

hoverDiv.addEventListener(
  "mouseover",
  () => (hoverDiv.style.backgroundColor = randomColor())
);
