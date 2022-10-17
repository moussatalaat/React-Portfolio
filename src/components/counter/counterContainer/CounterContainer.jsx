import React, { useState } from "react";
import Counter from "../counter/Counter";
import CounterActions from "../counterActions/CounterActions";
import "./CounterContainer.css";

function CounterContainer() {
  const [count, setCount] = useState(0);

  let increase = () => {
    setCount((count) => count + 1);
    // console.log(count);
  };

  let reset = () => {
    setCount(0);
  };

  let decrease = () => {
    setCount((count) => count - 1);
  };
  return (
    <div>
      <Counter count={count} />
      <CounterActions increase={increase} reset={reset} decrease={decrease} />
    </div>
  );
}

export default CounterContainer;
