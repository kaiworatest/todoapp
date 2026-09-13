import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Counter from './components/Counter';

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
        <Counter count={todos.length} />
        <TodoList todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
      </header>
    </div>
  );
}

export default App;