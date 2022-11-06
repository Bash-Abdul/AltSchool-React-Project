import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducerCounter = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: (state.count = 0) };
    default:
      throw new Error("Error occured in counter");
  }
};

const CounterPage = () => {
  const [state, dispatch] = useReducer(reducerCounter, initialState);
  return (
    <div className="container">
      <h2>UseReducer Counter</h2>
      <div>
        <h2 className="count">{state.count}</h2>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          increment
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "decrement" });
          }}
        >
          decrement
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
