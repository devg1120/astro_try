import type { Component } from "solid-js";
import { createSignal } from "solid-js";

export interface Props  {
  mode: any
}

//type IntrinsicAttributes = { mode: string; "client:only": string; }

export const SampleCounter: Component = (props :any) => {
  const [count, setCount] = createSignal(0);

  return (
    <>
    
      <button onClick={() => setCount(count() + 1)}>{props.mode} Click Me</button>
      
      <p>Count is: {count()}</p>
    </>
  );
};
