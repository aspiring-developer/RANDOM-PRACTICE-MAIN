import React from 'react';
import {useState} from 'react';

const StateTest3 = () => {
const [newTime, setNewTime] = useState(new Date().toLocaleString());

setTimeout(() => {
  setNewTime(new Date().toLocaleString());
}, 1000);

//console.log(time);
//console.log(theTime);
  return (
    <>
<h3> Current Time: {newTime} </h3>
    </>
  )
}

export default StateTest3;
