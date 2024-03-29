import React from 'react';
import { useState } from 'react';
import DataProcess from './components/DataProcess';
import data from './dataFile';
import StateTest from './components/StateTest';
import StateTest2 from './components/StateTest2';
import StateTest3 from './components/StateTest3';

const App = () => {
    return (
    <>
      <StateTest />
      <StateTest2 />
      <StateTest3 />
      {/*WITH MAP*/}
      {data.map(function (eachItem) {
        return <DataProcess imgURL={eachItem.link} imgTitle={eachItem.title} imgDescription={eachItem.description} imgPrice={eachItem.price} imgID={eachItem.id} key={eachItem.id} />
      })
      }
      {/*WITHOUT MAP*/}
      {/*<DataProcess imgURL={data[0].link} imgTitle={data[0].title} imgDescription={data[0].description} imgPrice={data[0].price} imgID={data[0].id} />
<DataProcess imgURL={data[1].link} imgTitle={data[1].title} imgDescription={data[1].description} imgPrice={data[1].price} imgID={data[1].id} />
<DataProcess imgURL={data[2].link} imgTitle={data[2].title} imgDescription={data[2].description} imgPrice={data[2].price} imgID={data[2].id} />*/}
    </>
  )
}

export default App;
