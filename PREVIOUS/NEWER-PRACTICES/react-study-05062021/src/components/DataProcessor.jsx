import React from 'react';

const DataProcessor = (props) => {
  return (
    <>
      <img src={props.imageURL} alt={props.imageAlt} />
      <p>Title: {props.imageTitle}</p>
      <p>Description: {props.imageDescription}</p>
      <p>Price: {props.imagePrice}</p>
      <p>ID: {props.imageID}</p>
    </>
  )
}

export default DataProcessor;
