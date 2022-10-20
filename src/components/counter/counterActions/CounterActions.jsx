import React from "react";
import "./counterActions.css";
function CounterActions({ increase, decrease, reset, count }) {
  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-danger" onClick={increase}>
        Increment+
      </button>
      <button
        className="btn btn-secondary"
        onClick={reset}
        disabled={count === 0}
      >
        Reset
      </button>
      <button
        className="btn btn-success"
        onClick={decrease}
        disabled={count === 0}
      >
        Decrement -
      </button>
    </div>
  );
}

export default CounterActions;
