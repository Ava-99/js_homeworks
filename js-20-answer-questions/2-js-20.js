// ? Remember domthis.js from your session?
// todo1: Look at the code below, fix it, and explain how you resolved the problem.
// Note: In this code, console.log and console.dir should refer to the button and h1 element, not the window.

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  ///!!!!At first i added commas between color values.
  return `rgb(${r},${g},${b})`;
};

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
  button.addEventListener('click', (e) => {
    ///!!! here this refers to window so we can ues e.target if put e as the function parameter or directly write button
    console.log(e.target);
    // console.log(button)
    console.dir(e.target);
    // console.dir(button)
    button.style.backgroundColor = makeRandColor();
    button.style.color = makeRandColor();
  });
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
  h1.addEventListener('click', () => {
    ///!!! for the same reason i changed this to h1
    console.log(h1);
    console.dir(h1);
    h1.style.backgroundColor = makeRandColor();
    h1.style.color = makeRandColor();
  });
}
