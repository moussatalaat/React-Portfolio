import { useDispatch, useSelector } from "react-redux";
import Counter from "../counter/Counter";
import CounterActions from "../counterActions/CounterActions";
import "./CounterContainer.css";
import {
  incrementCount,
  decrementCount,
  resetCount,
} from "../../../redux/counterSlice";

function CounterContainer() {
  const counterGlobalValue = useSelector((state) => state.counterStore.counter);
  console.log(counterGlobalValue);

  const dispatch = useDispatch();

  let increase = () => {
    dispatch(incrementCount(1));
  };

  let reset = () => {
    dispatch(resetCount());
  };

  let decrease = () => {
    dispatch(decrementCount(1));
  };
  return (
    <div>
      <Counter count={counterGlobalValue} />
      <CounterActions increase={increase} reset={reset} decrease={decrease} />
    </div>
  );
}

export default CounterContainer;
