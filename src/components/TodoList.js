import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: `Todo ${todos.length + 1}` }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
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
    </div>
  );
};

export default TodoList;