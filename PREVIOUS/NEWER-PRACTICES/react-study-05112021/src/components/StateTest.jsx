import React from 'react';
import { useState } from 'react';

function StateTest() {
  function increaseCount() {
  setCount(count + 1)
}
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Clicked it {count} times!</p>
      <button onClick={increaseCount}>Increase</button>
    </>
  )
}

export default StateTest;
