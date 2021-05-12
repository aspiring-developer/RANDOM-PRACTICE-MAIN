import React from 'react';
import {useState} from 'react';

const StateTest3 = () => {
const [theTime, setTheTime] = useState(new Date().toLocaleString());

//setTimeout(() => {
  //setTheTime(new Date().toLocaleString());
//}, 1000);

  return (
    <>
<h1>{theTime}</h1>
    </>
  )
}

export default StateTest3;
