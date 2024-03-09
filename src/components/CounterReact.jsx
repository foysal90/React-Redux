import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../reducks/actions/counterAction";

const CounterReact = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2> Counter app using React.......</h2>

      <h3>count: {count} </h3>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button onClick={() => dispatch(decrementCounter())}  disabled={count === 0} >Decrement</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  );
};

export default CounterReact;
