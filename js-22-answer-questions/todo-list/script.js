function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  list.innerHTML = "";
  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.style.color = 'white';
    listItem.textContent = todo.task;
    const completedBtn = document.createElement("button");
    completedBtn.textContent = "Completed";
    completedBtn.addEventListener("click", () => {
      todo.completed = !todo.completed;
      listItem.style.textDecoration = todo.completed ? "line-through" : "none";
    });
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      todos.splice(todos.indexOf(todo),1);
      list.removeChild(listItem);
    });
      listItem.appendChild(completedBtn);
      listItem.appendChild(deleteBtn);
      list.appendChild(listItem);
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let newTask = document.getElementById('todoInput').value;
  if(newTask.trim() !== ''){
    let newTodo= {
      task: newTask,
      completed: false
    };
    todos.push(newTodo);
    populateTodoList(todos);
    document.getElementById('todoInput').value='';
  }
}
document.getElementById('add-todo-btn').addEventListener('click', addNewTodo)
// OPTIONAL
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
