// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer

const closeButton = document.querySelector(".ri-close-line");
const messageBox = document.querySelector(".message");

closeButton.addEventListener("click", () => {
  messageBox.style.visibility = "hidden";
});
