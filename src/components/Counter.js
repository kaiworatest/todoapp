import React from 'react';

const Counter = ({ count }) => {
  return (
    <div className="counter">
      <h2>Total Todos: {count}</h2>
    </div>
  );
};

export default Counter;