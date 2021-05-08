import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import data from './dataFile';
import DataProcessor from './components/DataProcessor';

const App = () => {
  return (
    <>
      <Header />
      <h1>Item Information:</h1>
      {/*with map method*/}
      {data.map(function (eachItem) {
        console.log(eachItem);
        return <DataProcessor imageURL={eachItem.imageURL} imageAlt={eachItem.imageAlt} imageTitle={eachItem.imageTitle} imageDescription={eachItem.imageDescription} imagePrice={eachItem.imagePrice} imageID={eachItem.imageID} />
      }
      )}
      {/*without map method...*/}
      {/*<DataProcessor imageURL={data[0].imageURL} imageAlt={data[0].imageAlt} imageTitle={data[0].imageTitle} imageDescription={data[0].imageDescription} imagePrice={data[0].imagePrice} imageID={data[0].imageID} />
      <DataProcessor imageURL={data[1].imageURL} imageAlt={data[1].imageAlt} imageTitle={data[1].imageTitle} imageDescription={data[1].imageDescription} imagePrice={data[1].imagePrice} imageID={data[1].imageID} />
      <DataProcessor imageURL={data[2].imageURL} imageAlt={data[2].imageAlt} imageTitle={data[2].imageTitle} imageDescription={data[2].imageDescription} imagePrice={data[2].imagePrice} imageID={data[2].imageID} />*/}
      <Footer />
    </>
  )
}

export default App;
