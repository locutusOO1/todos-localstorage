var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");


// # Local Storage Todo's

// In this activity, we will working on storing our todos in `localStorage`. 

// ## Instructions

// * Inside the `init()` function:

//   * Set a variable called `storedTodos` that retrieves the todos from `localStorage` and parses the JSON string to an object.

//   * Check if the todos were retrieved from `localStorage` and if so, set a `todos` variable with the `storedTodos`.

//   * Lastly, render the todos to the DOM.

// * Inside the `storeTodos()` function:

//   * Stringify and set the "todos" key in `localStorage` to the `todos` array.

// ## Hint

// * You will need to use `JSON.stringify` and `JSON.parse`.



var todos = JSON.parse(localStorage.getItem('todos')) || [];

// # Render Todos

// In this activity you will be writing code to render an array of todo items to the list.

// ## Instructions

// * Open the `script.js` file provided to you. You have been provided the necessary variable declarations as well as an array of todo items.

// * Your goal is to create a function that will render our todos into a list in the browser.

//   * Initially set the text content of the todoList to an empty string.
  
//   * todoCountSpan should show the total count of todos on the page.
  
// * Inside of your render function you will also need a for loop.

//   * It should loop over the `todos` array creating an `li` element for each index of the array.
  
//   * It should set the content of the created `li` element to the value of the current array index.
  
//   * Finally the new `li` should be appended to the `ul` provided.


function removeTodo(event) {
    var todoIndex = parseInt(event.target.parentElement.getAttribute("data-index"));
    todos.splice(todoInput,1);
    updateLocalStorage();
    renderTodos();
}

function updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;
    for (var i = 0; i < todos.length; i++) {
        var li = document.createElement("li");
        li.textContent = todos[i];

// # Complete Todos

// In this activity, we will create a "complete" button that successfully removes a todo item from the list when clicked.

// ## Instructions

// * Modify your `renderTodos()` function:

//   * When a new todo is created, add a `data-index` for each `li`.

//   * Generate a button that says "Complete" and append it to your `li`.

// * Add an event listener so that when a user clicks the Complete button, it accesses the `data-index` value and removes that todo element from the list.

// ## Hint

// * You can use `setAttribute` for `data-index` and `splice` to remove your todo from the list.

        li.setAttribute("data-index",i);
        var button = document.createElement("button");
        button.textContent = "Complete";
        li.appendChild(button);

        button.addEventListener("click", removeTodo);

        todoList.appendChild(li);
    }
}

// # Add ToDo's

// In this activity, we will be continuing to build on our Todo activity. This time, we'll be adding the `add` functionality.

// ## Instructions

// * Add an event listener so that when a user hits enter, the value from the todo input field is pushed to our todo array.

// * Make sure that empty values are not pushed to the array.

// * Once the value has been added to the array, clear the input field and re-render the todo list.

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var newTodoText = todoInput.value;
    if (newTodoText !== "") {
        todos.push(newTodoText);
        updateLocalStorage();
        todoInput.value = "";
        renderTodos();
    }
})



renderTodos();


