import React from 'react';
//import data from '../dataFile';
const ImageProcessor = (props) => {
  return (
    <div>
      <img src={props.imageURL} alt={props.imageAlt} />
      <h4> {props.imageTitle} </h4>
      <p>{props.imageDescription}</p>
      <p>{props.imagePrice}</p>
      <p>{props.imageID}</p>
    </div>
  )
}

export default ImageProcessor;
