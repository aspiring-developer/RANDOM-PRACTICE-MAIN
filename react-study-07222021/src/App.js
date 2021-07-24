import Navbar from './Navbar';
import Home from './Home';
import TestingComponent from './TestingComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <TestingComponent />
    </div>
  );
};

export default App;
