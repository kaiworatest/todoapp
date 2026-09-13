import React from 'react';

/**
 * Counter component that displays the total number of todo items
 * @param {number} count - The total number of todo items
 * @returns {JSX.Element} Counter component JSX
 */
function Counter({ count }) {
  return (
    <div className="counter">
      <h2>Total Todos: {count}</h2>
    </div>
  );
}

export default Counter;