import React, { useState } from "react";
import "./Counter.css";
const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const handleCountChange = (e) => {
    setCount(parseInt(e.target.value));
  };
  return {
    value: count,
    handleCountChange: handleCountChange,
    increase: () => setCount((prevCount) => prevCount + 1),
    decrease: () => setCount((prevCount) => prevCount - 1),
    reset: () => setCount(initialCount),
  };
};

const Counter = ({ initialCount }) => {
  const counter = useCounter(initialCount);

  return (
    <>
      <div className="container">
        <input
          type="number"
          value={counter.value}
          onChange={counter.handleCountChange}
          placeholder="Set Counter Value"
        />
        <br />
        <br />
        <p>
          Count: <span className="count"> {counter.value}</span>
        </p>
        <br />
        <br />
        <button onClick={counter.reset}>Reset</button>
        <button onClick={counter.increase}>+</button>
        <button onClick={counter.decrease}>-</button>
      </div>
    </>
  );
};

export default Counter;
