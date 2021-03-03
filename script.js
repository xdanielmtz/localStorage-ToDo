var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos () {
    todoCountSpan.textContent = todos.length; 
    for(var i =0; i < todos.length; i++){
        var liEL = document.createElement("li");
        liEL.textContent =todos[i]
        liEL.setAttribute("data-index", 1);
            var newButton = document.createElement
        todoList.append(liEL);
    }
}

todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var newTodo = todoInput.value;
    console.log(newTodo);
    todos.push(newTodo);
    renderTodos();
})


renderTodos();