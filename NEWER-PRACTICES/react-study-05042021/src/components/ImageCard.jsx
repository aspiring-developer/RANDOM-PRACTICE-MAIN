import React from 'react';
import data from "../dataFile";
import ImageProcessor from './ImageProcessor';
const ImageCard = () => {
  console.log(data)
  return (
    <>

{data.map(function(eachItem) {
  return <div style={{backgroundColor: "#f2f2f2", border:"1px solid blue", padding: "10px", margin: "10px",}}> <ImageProcessor imageURL={eachItem.imageURL} imageAlt={eachItem.imageAlt} imageTitle={eachItem.imageTitle} imageDescription={eachItem.imageDescription} imagePrice={eachItem.imagePrice} key={eachItem.imageID}/>
  </div>})}

    {/*WITHOUT MAP*/}
    {/*<ImageProcessor imageURL={data[0].imageURL} imageAlt={data[0].imageAlt} imageTitle={data[0].imageTitle} imageDescription={data[0].imageDescription} imagePrice={data[0].imagePrice}  />
    <ImageProcessor imageURL={data[1].imageURL} imageAlt={data[1].imageAlt} imageTitle={data[1].imageTitle} imageDescription={data[1].imageDescription} imagePrice={data[1].imagePrice}  />
    <ImageProcessor imageURL={data[2].imageURL} imageAlt={data[2].imageAlt} imageTitle={data[2].imageTitle} imageDescription={data[2].imageDescription} imagePrice={data[2].imagePrice}  />*/}
    </>
  )
}

export default ImageCard;
