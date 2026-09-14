import React from 'react';
import { render } from '@testing-library/react';
import TodoCounter from '../components/TodoCounter';
import { Todo } from '../types/todo';

describe('TodoCounter', () => {
  test('renders correct number of todos', () => {
    const todos: Todo[] = [
      { id: 1, text: 'Todo 1', completed: false },
      { id: 2, text: 'Todo 2', completed: true },
    ];
    
    const { getByText } = render(<TodoCounter todos={todos} />);
    
    expect(getByText('Total todos: 2')).toBeInTheDocument();
  });

  test('renders zero todos when array is empty', () => {
    const todos: Todo[] = [];
    
    const { getByText } = render(<TodoCounter todos={todos} />);
    
    expect(getByText('Total todos: 0')).toBeInTheDocument();
  });
});