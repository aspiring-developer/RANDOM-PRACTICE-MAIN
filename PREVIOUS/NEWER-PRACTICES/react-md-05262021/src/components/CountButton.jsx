import { useState } from 'react';

const CountButton = (props) => {
  //console.log(props)
  //console.log(props.incrementBy)
  const [currentCount, setCurrentCount] = useState(0)

  const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy)
  }

  return (
    <>
      <h4> From CountButton component </h4>
      <button onClick={handleClick}> + {props.incrementBy} </button>
      <div> {currentCount} </div>
    </>
  )
}

export default CountButton;
