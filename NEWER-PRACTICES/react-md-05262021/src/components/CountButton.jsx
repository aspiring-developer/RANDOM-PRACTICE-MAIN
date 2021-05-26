import { useState } from 'react';

const CountButton = () => {
  const [currenCount, setCurrentCount] = useState(0)

  const handleClick = () => {
    setCurrentCount(currenCount + 1)
  }

  return (
    <>
      <h4> From CountButton component </h4>
      <button onClick={handleClick}> +1 </button>
      <div> {currenCount} </div>
    </>
  )
}

export default CountButton;
