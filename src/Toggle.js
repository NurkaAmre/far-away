import React from 'react';
import { useState } from 'react';

export default function Toggle() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  const time = new Date('june 14 1990');
  time.setDate(time.getDate() + count);
  console.log(time);
  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        Step {step}
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((s) => s - step)}>-</button>
        Count {count}
        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>
      <p>{time.toDateString()}</p>
    </>
  );
}
