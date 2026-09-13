import React from 'react';
import TodoItem from './TodoItem';

/**
 * TodoList component to render a list of TodoItem components
 * @param {Object} props - Component props
 * @param {Array} props.todos - Array of todo items
 * @param {Function} props.onDelete - Function to handle todo deletion
 * @returns {JSX.Element} TodoList component JSX
 */
function TodoList({ todos, onDelete }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TodoList;