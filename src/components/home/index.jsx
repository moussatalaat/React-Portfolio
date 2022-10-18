import React from "react";
import Counter from "../counter/counter/Counter";
import { useSelector } from "react-redux";
const Home = () => {
  const counterGlobalValue = useSelector((state) => state.counterStore.counter);
  return (
    <div>
      <h1 className="text-center">Home</h1>

      <Counter count={counterGlobalValue} />
    </div>
  );
};

export default Home;
