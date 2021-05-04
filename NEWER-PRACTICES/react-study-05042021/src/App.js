
function App() {
  const theName = "Shiva";
  let date = new Date();
  const currentYear = date.getFullYear();
  return (
    <>

      <header> <h1 className="heading"> Just a Test Project </h1></header>
      <div>
      <img src="https://picsum.photos/id/0/200/300" alt="Random view 1"/>;
      <img src="https://picsum.photos/id/1005/200/300" alt="Random view 2"/>;
      <img src="https://picsum.photos/id/1025/200/300" alt="Random view 3"/>;

      </div>
      <p style={{color: "blue", fontSize: "20px"}}>Created by: {theName} </p>
      {/*Both ways below are fine...*/}
      <p>Copyright: {currentYear} </p>
      <p>Copyright: {date.getFullYear()} </p>
    </>
  );
}
export default App;
