document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.querySelector('#todo-list');
    const todoInput = document.querySelector('#todo-input');
    const addButton = document.querySelector('#add-button');

    // Load todos from local storage
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Function to render todos
    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach(function(todo, index) {
            const todoItem = document.createElement('li');
            todoItem.innerHTML = `
                <span>${todo}</span>
                <button class="delete-button" data-index="${index}">Delete</button>
            `;
            todoList.appendChild(todoItem);
        });
    }

    // Add todo
    addButton.addEventListener('click', function() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            todos.push(todoText);
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
            todoInput.value = '';
        }
    });

    // Delete todo
    todoList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-button')) {
            const index = event.target.dataset.index;
            todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
        }
    });

    // Initial render
    renderTodos();
});

