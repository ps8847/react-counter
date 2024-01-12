// Counter.js

import React, { useState } from "react";
import "./style.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const doubleIncrement = () => setCount(count + 2);
  const doubleDecrement = () => setCount(count - 2);

  return (
    <>
      <div className="counter-container">
        <h1 className="counter-number">{count}</h1>
      </div>

      <section className="buttons-container">
        <button onClick={increment} className="counter-button increment">
          +
        </button>
        <button onClick={decrement} className="counter-button decrement">
          -
        </button>
        <button onClick={doubleIncrement} className="counter-button double-increment">
          +2
        </button>
        <button onClick={doubleDecrement} className="counter-button double-decrement">
          -2
        </button>
        <button onClick={reset} className="counter-button reset">
          Reset
        </button>
      </section>
    </>
  );
}

export default Counter;
