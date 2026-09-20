import React, { useState } from 'react';
import './App.css';

function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

function TodoList({ todos, onRemoveTodo }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (todoText) => {
    if (todoText.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: todoText, completed: false }]);
    }
  };
  
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <p>Active todos: {todos.filter(todo => !todo.completed).length}</p>
<p>Total todos: {todos.length}</p>
        <TodoForm onAddTodo={addTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} />
      </header>
    </div>
  );
}

export default App;