import React from "react";
import { useCounterContext } from "../../../context/CounterProvider";

const CounterDisplay = () => {
  const {
    state: { count },
    setCount,
  } = useCounterContext();

  return (
    <div>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
    </div>
  );
};

export default CounterDisplay;
