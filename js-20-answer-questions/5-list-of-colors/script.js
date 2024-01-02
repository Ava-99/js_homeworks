function listOfColours(colours) {
  // Write your code here...
  const select = document.createElement("select");
  const p = document.createElement("p");

  select.addEventListener("change", function () {
    const selectedColor = this.value;
    p.textContent = `You have selected:${selectedColor}`;
    p.style.color = selectedColor;
  });

  colours.forEach(function (colour) {
    const option = document.createElement("option");
    option.textContent = colour;
    select.appendChild(option);
  });

  const contentDiv = document.querySelector("#content");
  contentDiv.appendChild(select);
  contentDiv.appendChild(p);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
