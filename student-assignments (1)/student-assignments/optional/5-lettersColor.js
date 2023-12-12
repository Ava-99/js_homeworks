/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = ["red", "aqua", "orange", "purple", "lightgreen"];

const receivedText = prompt("Enter a text:");

let letters = receivedText.split("");
let coloredLetters = [];

for (let i = 0; i < letters.length; i++) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  let coloredLetter =
    "<span style='color: " + randomColor + "'>" + letters[i] + "</span>";
  coloredLetters.push(coloredLetter);
}

document.querySelector("#word").innerHTML = coloredLetters.join("");


