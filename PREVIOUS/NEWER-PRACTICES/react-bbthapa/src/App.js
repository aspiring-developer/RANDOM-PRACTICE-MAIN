//import Demo from './Demo';
import Avatar from './Avatar';
import 'tachyons';
import data from './data';

function App() {
  return (
    <>
     <div>
      <h1 className="tc">React project</h1>
{/*With map*/}
{data.map(function(eachItem) {
  return <Avatar name={eachItem.name} position={eachItem.position} imgURL={eachItem.imgURL} imgAlt={eachItem.imgAlt} id={eachItem.id} />

})}



      {/*Without map*/}
      {/*<Avatar name={data[0].name} position={data[0].position} imgURL={data[0].imgURL} imgAlt={data[0].imgAlt} id={data[0].id} />
      <Avatar name={data[1].name} position={data[1].position} imgURL={data[1].imgURL} imgAlt={data[1].imgAlt} id={data[1].id} />
      <Avatar name={data[2].name} position={data[2].position} imgURL={data[2].imgURL} imgAlt={data[2].imgAlt} id={data[2].id} />
      <Avatar name={data[3].name} position={data[3].position} imgURL={data[3].imgURL} imgAlt={data[3].imgAlt} id={data[3].id} />*/}

      </div>
    </>
  );
}

export default App;
