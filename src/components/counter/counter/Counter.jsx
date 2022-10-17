import React from "react";
import "./counter.css";
function Counter({ count }) {
  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <h2>{count}</h2>
      </div>
    </div>
  );
}
export default Counter;
