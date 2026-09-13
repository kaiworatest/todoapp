import React, { useState } from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (todoText) => {
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <Counter count={todos.length} />
        <div className="todo-form">
          <input 
            type="text" 
            placeholder="Add a new todo..." 
            onKeyPress={(e) => {
              if (e.key === 'Enter' && e.target.value.trim()) {
                addTodo(e.target.value.trim());
                e.target.value = '';
              }
            }}
          />
        </div>
        <TodoList 
          todos={todos} 
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </header>
    </div>
  );
}

export default App;