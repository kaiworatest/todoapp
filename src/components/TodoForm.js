import React, { useState } from 'react';

const TodoForm = ({ onAddTodo, todos }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onAddTodo(inputValue.trim());
      setInputValue('');
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add</button>
      </form>
      <p>Completed: {completedCount} of {todos.length}</p>
    </div>
  );
};

export default TodoForm;