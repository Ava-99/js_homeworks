// ? Question-1:follow these steps:
// todo-1:Select the body tag and apply this color to the background "#0a122d"
document.body.style.backgroundColor = "#0a122d";
// todo-2:select image and set margin "4rem 0"
const imgEle = document.querySelector("img")
imgEle.style.margin = "4rem 0";
// todo-3:Apply a rounded border to the image and set its size to "1 rem"
imgEle.style.borderRadius = "1rem";
// todo-4:Select h1 and h5 tags and place them in the appropriate position according to the image.(you can check help folder)
// !Answer:
const h1Ele = document.querySelector("h1");
const h5Ele = document.querySelector("h5");

h1Ele.style.position= "absolute";
h1Ele.style.top = "10px";
h1Ele.style.left = "5px"

h5Ele.style.position= "relative";
h5Ele.style.top = "-40px";
h5Ele.style.left = "5px"