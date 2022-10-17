import React from "react";
import "./counterActions.css";
function CounterActions({ increase, decrease, reset, count }) {
  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={reset} disabled={count === 0}>
        Reset
      </button>
      <button onClick={decrease} disabled={count === 0}>
        -
      </button>
    </div>
  );
}

export default CounterActions;
