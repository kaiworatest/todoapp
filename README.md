# Todo App

## Project Setup

This is a simple todo application that allows users to:
- Create new todos by entering a title and clicking Add
- Validate that the todo title is not empty before creating and displaying the todo

## Functionality

### Creating Todos
- Users can enter a title for their todo
- Upon clicking "Add", the todo will be created and displayed in the list
- Validation prevents creation of todos with empty titles
- Invalid (empty) todos are rejected with a validation error message

## Getting Started

1. Clone the repository
2. Install dependencies using `npm install`
3. Run the application using `npm start`

## Todo Creation UI

To create a new todo, users can:

1. Enter a title for their todo in the input field
2. Click the "Add" button to submit the todo

### Form Elements

```html
<form id="todo-form">
  <input type="text" id="todo-input" placeholder="Enter todo title" required>
  <button type="submit">Add</button>
</form>

<div id="error-message" style="color: red; display: none;"></div>

<ul id="todo-list"></ul>

<script>
document.getElementById('todo-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const input = document.getElementById('todo-input');
  const errorMessage = document.getElementById('error-message');
  const todoList = document.getElementById('todo-list');
  
  // Validate that the title is not empty
  if (input.value.trim() === '') {
    errorMessage.textContent = 'Todo title cannot be empty';
    errorMessage.style.display = 'block';
    return;
  }
  
  // Clear error message if validation passes
  errorMessage.style.display = 'none';
  
  // Create and display the new todo
  const li = document.createElement('li');
  li.textContent = input.value;
  todoList.appendChild(li);
  
  // Clear the input field
  input.value = '';
});
</script>
```
