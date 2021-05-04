import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const theName = "Someone";
  let date = new Date();
  const currentYear = date.getFullYear();
  const age = 42;
  return (
    <>

<Header />
      <div>
      <img src="https://picsum.photos/id/0/150/300" alt="Random view 1"/>;
      <img src="https://picsum.photos/id/1005/150/300" alt="Random view 2"/>;
      <img src="https://picsum.photos/id/1025/150/300" alt="Random view 3"/>;

      </div>
      <p style={{color: "blue", fontSize: "20px"}}>Created by: {theName} </p>
      {/*Both ways below are fine...*/}
      <p>Birth Year: {currentYear - age} </p>
      <p>Copyright: {date.getFullYear()} </p>
<Footer />
    </>
  );
}
export default App;
