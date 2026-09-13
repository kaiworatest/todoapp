import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;