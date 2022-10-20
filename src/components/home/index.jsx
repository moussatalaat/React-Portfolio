import React from "react";
import Counter from "../counter/counter/Counter";
import { useSelector } from "react-redux";
const Home = () => {
  const counterGlobalValue = useSelector((state) => state.counterStore.counter);
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1>Home</h1>
      </div>
      <div className="d-flex justify-content-center">
        <Counter count={counterGlobalValue} />
      </div>
    </div>
  );
};

export default Home;
