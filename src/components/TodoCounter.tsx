import React from 'react';
import { Todo } from '../types/todo';

interface TodoCounterProps {
  todos: Todo[];
}

const TodoCounter: React.FC<TodoCounterProps> = ({ todos }) => {
  return (
    <div>
      <h2>Todo Counter</h2>
      <p>Total todos: {todos.length}</p>
    </div>
  );
};

export default TodoCounter;