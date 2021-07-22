//import {useState} from 'react';
const Home = () => {
  //const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("You Clicked The Button!");
  };

  const handleClickAgain = (name) => {
    console.log(name + ", You Clicked Another Button!");
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <h3>Count: 0</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={()=>{
        handleClickAgain('Shiva')
      }}>Click Me Again</button>
    </div>
   );
}

export default Home;