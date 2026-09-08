import React from 'react';

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className="todo-item">
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;