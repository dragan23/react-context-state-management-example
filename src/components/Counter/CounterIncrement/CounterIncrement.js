import React from "react";
import { useCounterContext } from "../../../context/CounterProvider";

const CounterIncrement = () => {
  const { increment } = useCounterContext();

  return (
    <div>
      <button className="btn" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default CounterIncrement;
