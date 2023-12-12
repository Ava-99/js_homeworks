//todo1. Create an index.html file and put four p elements

//todo2. Get the first paragraph by using document.querySelector(tagname)
const firstParagraph = document.querySelector("p");
console.log(firstParagraph);

//todo3. Get each of the paragraph using document.querySelector(#id)
const paragraphIds = document.querySelector("#firstp");
console.log(paragraphIds);

//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
const allParagraph = document.querySelectorAll("p");
console.log(allParagraph);

//todo5. Loop through the nodeList and get the text content of each paragraph
for (let i = 0; i < allParagraph.length; i++) {
  const textContacts = allParagraph[i].textContent;
  console.log(textContacts);
}

//todo6. Set a text content to the fourth paragraph
const fourthParagraph = allParagraph[3];
fourthParagraph.textContent = "new content for 4th paragraph";
console.log(fourthParagraph);
console.log(fourthParagraph.textContent);

//todo7. Set id and class attribute for all the paragraphs using different methods
for (let i = 0; i < allParagraph.length; i++) {
  const paragraph = allParagraph[i];
  paragraph.id = `paragraph${i + 1}`;
  paragraph.classList.add("class");
}
console.log(allParagraph);

for (let i = 0; i < allParagraph.length; i++) {
  const paragraph = allParagraph[i];
  paragraph.setAttribute("id", `para${i + 1}`);
  paragraph.setAttribute("class", "pClass");
}
console.log(allParagraph);

//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// allParagraph.style.backgroundcolor = "yellow"
for (i = 0; i < allParagraph.length; i++) {
  const pELe = allParagraph[i];
  pELe.style.color = "blue";
  pELe.style.backgroundColor = "lightblue";
  pELe.style.border = "2px solid darkgreen";
  pELe.style.fontSize = "20px";
  pELe.style.fontFamily = "cursive";
}
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
for (i = 0; i < allParagraph.length; i++) {
  if (i % 2 === 0) {
    allParagraph[i].style.color = "green";
  } else {
    allParagraph[i].style.color = "red";
  }
}
