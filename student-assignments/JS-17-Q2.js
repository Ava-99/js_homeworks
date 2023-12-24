// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:

const spansEles = document.querySelectorAll("span.circle");
spansEles.forEach((span) => {
  if (span.classList.contains("blue")) {
    span.classList.remove("blue");
    span.classList.add("purple");
  } else if (span.classList.contains("purple")) {
    span.classList.remove("purple");
    span.classList.add("blue");
  }
});
