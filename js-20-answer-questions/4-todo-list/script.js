function todoList(todos) {
  // Write your code here...
  const contentDiv = document.querySelector("#content");
  const ul = document.createElement("ul");
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.todo;
    li.addEventListener("click", () => {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
      } else {
        li.style.textDecoration = "line-through";
      }
    });
    ul.appendChild(li);
    // console.log(ul)
  });
  // ul.appenedChild(li);
  contentDiv.appendChild(ul);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
