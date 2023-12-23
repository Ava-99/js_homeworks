/*
? You have to write a code that changes the color of rectangles upon clicking each color.

- First, look at color-palette1.png . You should create a similar page.
- There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.
- The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.
- hint: you can modify the alpha (a) of the rgba color to create the spectrum color 
- For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.

rgba(31, 127, 102, 1)
rgba(255, 200, 0, 1)
rgba(255, 123, 0, 1)
rgba(216, 1, 1, 1)
rgba(223, 4, 70, 1)
rgba(127, 31, 85, 1) 
rgba(93, 18, 199, 1)
rgba(93, 18, 199, 1)
*/

const colorPalette = [
  "rgba(31, 127, 102, 1)",
  "rgba(255, 200, 0, 1)",
  "rgba(255, 123, 0, 1)",
  "rgba(216, 1, 1, 1)",
  "rgba(223, 4, 70, 1)",
  "rgba(127, 31, 85, 1)",
  "rgba(93, 18, 199, 1)",
];

const rings = document.querySelector(".ring");

const rectangles = document.querySelectorAll(".rectangle");
const circles = document.querySelectorAll(".color-circle");

for (let i = 0; i < circles.length; i++) {
  circles[i].style.backgroundColor = colorPalette[i];
}

circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    rectangles[0].style.backgroundColor = colorPalette[index];

    circles[index].style.border = `5px solid rgb(252, 248, 248)`;
    circles[index].style.outline = `4px solid ${colorPalette[index]}`;

    const chosenColor = colorPalette[index];
    const spectrum = generateColorSpectrum(chosenColor, rectangles.length);

    rectangles.forEach((rectangle, i) => {
      if (i > 0) {
        rectangle.style.backgroundColor = spectrum[i - 1];
      }
    });
  });
});

function generateColorSpectrum(color, count) {
  const spectrum = [];
  const rgbaParts = color.substring(5, color.length - 1).split(",");

  const r = parseInt(rgbaParts[0]);
  const g = parseInt(rgbaParts[1]);
  const b = parseInt(rgbaParts[2]);
  const a = parseFloat(rgbaParts[3]);

  const step = a / count;

  for (let i = 1; i <= count; i++) {
    const alpha = a - i * step;
    spectrum.push(`rgba(${r}, ${g}, ${b}, ${alpha})`);
  }

  return spectrum;
}
