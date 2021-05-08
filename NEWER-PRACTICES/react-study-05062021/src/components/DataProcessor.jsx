import React from 'react';

const DataProcessor = (props) => {
  return (
    <>
      <img src={props.imageURL} alt={props.imageAlt} />
      <h4>Title: {props.imageTitle}</h4>
      <h4>Description: {props.imageDescription}</h4>
      <p>Price: {props.imagePrice}</p>
      <p>ID: {props.imageID}</p>
    </>
  )
}

export default DataProcessor;
