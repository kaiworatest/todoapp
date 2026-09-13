import React, { useState } from 'react';
import './App.css';

// Counter component to display total todo count
function Counter({ count }) {
  return (
    <div className="counter">
      <h2>Total Todos: {count}</h2>
    </div>
  );
}

// TodoItem component to display individual todo
function TodoItem({ todo, onDelete }) {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

// TodoList component to display all todos
function TodoList({ todos, onDelete }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Add some sample todos for demonstration
  React.useEffect(() => {
    addTodo('Learn React');
    addTodo('Build a todo app');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
        <Counter count={todos.length} />
        <TodoList todos={todos} onDelete={deleteTodo} />
      </header>
    </div>
  );
}

export default App;