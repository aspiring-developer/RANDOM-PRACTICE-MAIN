import React from 'react';
import {useState} from 'react';

const StateTest3 = () => {
let time = new Date().toLocaleString();
const [theTime, setTheTime] = useState(time);

console.log(time);
console.log(theTime);
  return (
    <>
<h3> Current Time: {theTime} </h3>
    </>
  )
}

export default StateTest3;
