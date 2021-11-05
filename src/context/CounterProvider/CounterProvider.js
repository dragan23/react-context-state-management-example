import { createContext, useReducer, useMemo, useContext } from "react";
import { reducer, initialState } from "./reducer";
import { INCREMENT, DECREMENT, SET_COUNT } from ".";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state, dispatch]);

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

const useCounterContext = () => {
  const [state, dispatch] = useContext(CounterContext);

  const increment = () => {
    dispatch({ type: INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  const setCount = (count) => {
    const newCount = parseInt(count);
    dispatch({ type: SET_COUNT, payload: newCount ? newCount : 0 });
  };

  return {
    state,
    dispatch,
    increment,
    decrement,
    setCount,
  };
};

export { useCounterContext, CounterProvider };
