import React, { useState } from 'react';
import TodoCounter from './components/TodoCounter';
import { Todo } from './types/todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="App">
      <h1>Todo Application</h1>
      <TodoCounter todos={todos} />
    </div>
  );
};

export default App;