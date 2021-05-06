import React from 'react';

const ImageProcessor = (props) => {
  return (
    <>
      <img src={props.imageURL} alt={props.imageAlt} />
      <h4>Title: {props.imageTitle}</h4>
      <p>Description: {props.imageDescription}</p>
      <p>Price: {props.imagePrice}</p>
      <p> ID: {props.imageID}</p>
    </>
  )
}

export default ImageProcessor;
