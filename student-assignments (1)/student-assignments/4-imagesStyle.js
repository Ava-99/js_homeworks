//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops

const allImages = document.querySelectorAll("img");
for (i = 0; i < allImages.length; i++) {
  const imgEle = allImages[i];
  if (i % 2 === 0) {
    imgEle.style.border = " 3px solid black";
  } else {
    imgEle.style.border = " 3px solid yellow";
  }
}
