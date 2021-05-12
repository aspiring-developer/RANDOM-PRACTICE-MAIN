import React from 'react';
import { useState } from 'react';

const StateTest2 = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Clicked it {count} times!</p>
      <button onClick={() => setCount(count + 1)}> Increase Count </button>
      <button onClick={function () {
        if (count >= 1) {
          setCount(count - 1)
        }
      }}> Decrease Count </button>
    </>
  )
}

export default StateTest2;
