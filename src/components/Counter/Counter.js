import React from "react";
import { CounterDecrement } from "./CounterDecrement";
import { CounterDisplay } from "./CounterDisplay";
import { CounterIncrement } from "./CounterIncrement";
import styles from "./Counter.module.css";

const Counter = () => {
  return (
    <>
      <h2>React Context Example</h2>
      <div className={styles.counter}>
        <CounterDecrement />
        <CounterDisplay />
        <CounterIncrement />
      </div>
    </>
  );
};

export default Counter;
