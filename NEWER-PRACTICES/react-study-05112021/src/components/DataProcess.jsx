import React from 'react';

const DataProcess = (props) => {
  return (
    <>
      <img src={props.imgURL} alt={props.imgAlt} />
      <p>Title: {props.imgTitle}</p>
      <p>Description: {props.imgDescription}</p>
      <p>Price: {props.imgPrice}</p>
      <p>ID: {props.imgID}</p>
    </>
  )
}

export default DataProcess;
