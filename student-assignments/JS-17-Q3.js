// ?Question-3:follow these steps:
// todo-1:select "ul" element with "navbar" class.
// todo-2:add the items of the navbarItem array to the "ul" element by appending them as <li> elements.
// todo-3:Add the class "item" to each <li> element.
// todo-4:Edit the <li> tags according to the image.(You can check the help folder or use the following style for each <li> element)
/**
  {
    margin: 0 1rem;
    cursor: pointer;
  }
*/
// !Answer:
const navbarItem = ["Home", "Products", "Blog", "Contact us"];

const navbarEle = document.querySelector("ul.navbar");

navbarItem.forEach((item) => {
  const liEle = document.createElement("li");
  liEle.textContent = item;
  navbarEle.appendChild(liEle);
});

const liEles = document.querySelectorAll("ul.navbar li");
liEles.forEach((li) => {
  li.classList.add("item");
});

liEles.forEach((li) => {
  li.style.margin = "0 1rem";
  li.style.cursor = "pointer";
});


