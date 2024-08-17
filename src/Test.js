/**
 * A slow component that renders a list of 10,000 words.
 * This component is intentionally slow to demonstrate the impact of slow rendering on the parent component.
 *

 */
import { useState } from "react";

function SlowComponent() {
  // If this is too slow on your maching, reduce the `length`
  const words = Array.from({ length: 10_000 }, () => "WORD");
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word}
        </li>
      ))}
    </ul>
  );
}
/**
 * A counter component that renders a button to increase the count and a child component.
 * The child component isn't re-rendered every time the count changes, that's because
 * SlowComponent is already been created before the Counter component re-rendered,
 * therefore SlowComponent cannot be affected by the state change in the Counter
 *
 * children - The child component to render.
 */

function Counter({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      {children}
    </div>
  );
}

export default function Test() {
  /*  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      <SlowComponent />
    </div>
  ); */
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <Counter>
        <SlowComponent />
      </Counter>
    </div>
  );
}
