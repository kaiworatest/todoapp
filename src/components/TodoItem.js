import React from 'react';

/**
 * TodoItem component to represent an individual todo item
 * @param {Object} props - Component props
 * @param {Object} props.todo - The todo item object with id and text
 * @param {Function} props.onDelete - Function to handle todo deletion
 * @returns {JSX.Element} TodoItem component JSX
 */
function TodoItem({ todo, onDelete }) {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;