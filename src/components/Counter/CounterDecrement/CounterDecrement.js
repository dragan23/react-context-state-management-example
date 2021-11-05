import React from "react";
import { useCounterContext } from "../../../context/CounterProvider";

const CounterDecrement = () => {
  const { decrement } = useCounterContext();

  return (
    <div>
      <button className="btn" onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default CounterDecrement;
