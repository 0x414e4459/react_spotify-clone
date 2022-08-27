import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setamount] = useState(0);
  const addValue = Number(amount) || 0;
  const resetAll = () => {
    setamount(0);
    dispatch(reset());
  };
  return (
    <div>
      <h4>Counter App</h4>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br />
      <input
        type="text"
        value={amount}
        onChange={(e) => setamount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(addValue))}>
        increment
      </button>
      <button onClick={() => dispatch(decrementByAmount(addValue))}>
        decrement
      </button>
      <button onClick={resetAll}>Reset all</button>
    </div>
  );
}
export default Counter;
