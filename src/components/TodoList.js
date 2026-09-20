import React from 'react';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span 
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => onToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Active Todos: {todos.filter(todo => !todo.completed).length}</p>
    </div>
  );
};

export default TodoList;