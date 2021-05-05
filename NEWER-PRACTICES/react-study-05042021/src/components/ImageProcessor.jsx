import React from 'react';

const ImageProcessor = (props) => {
  return (
    <>
      <img src={props.imageURL} alt={props.imageAlt} />
      <h4>{props.imageTitle}</h4>
      <p>{props.imageDescription}</p>
      <p>{props.imagePrice}</p>
    </>
  )
}

export default ImageProcessor;
