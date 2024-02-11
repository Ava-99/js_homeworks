/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/

const article = document.querySelector("article");

// ! Answer

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerText = `${user.name}\n${user.company.name}`;
      card.style.border = "1px solid #ccc";
      card.style.borderRadius = "5px";
      card.style.padding = "10px";
      card.style.margin = "10px";
      card.style.width = "200px";
      article.style.display = "flex";
      article.style.flexWrap = "wrap";
      article.style.justifyContent = "center";
      article.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
