import React from 'react';

const Counter = ({ count }) => {
  return (
    <div className="counter">
      <p>Total todos: {count}</p>
    </div>
  );
};

export default Counter;