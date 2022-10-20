import React from "react";
import "./counter.css";
function Counter({ count }) {
  return (
    <div>
      <h1 className="d-flex justify-content-center">Counter App</h1>
      <div className="d-flex justify-content-center">
        <h2>{count}</h2>
      </div>
    </div>
  );
}
export default Counter;
