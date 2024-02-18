document.getElementById("generate-btn").addEventListener("click", getAdvice);

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("advice-text").textContent = data.slip.advice;
    })
    .catch((error) => console.error("Error fetching advice:", error));
}
