
import React from 'react';
import ImageProcessor from './components/ImageProcessor';
import data from "./dataFile";

const App = () => {
  return (
    <>
      <h1>Testing...</h1>
      <ImageProcessor
        imageURL={data[0].imageURL}
        imageAlt={data[0].imageAlt}
        imageTitle={data[0].imageTitle}
        imageDescription={data[0].imageDescription}
        imagePrice={data[0].imagePrice}
        imageID={data[0].imageID}
      />
    </>
  )
}

export default App;
