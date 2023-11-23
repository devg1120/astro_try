//import  { Component } from "solid-js";
import { createSignal } from "solid-js";

export const SampleCounter  = (props) => {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <button onClick={() => setCount(count() + 1)}>{props.mode} Click Me</button>
      <p>Count is: {count()}</p>
    </>
  );
};
