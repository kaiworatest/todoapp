import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: `Todo ${todos.length + 1}` }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <div>
          <p>Total todos: {todos.length}</p>
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => removeTodo(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;