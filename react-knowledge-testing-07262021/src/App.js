import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './reset.css';

function App() {
  return (
    <div className="container-fluid entireDocumentWrapper m-2 p-2">
    <div className="allComponentsWrapper m-2 p-2">
      <Header />
      <Home />
      <Footer />
      </div>
    </div>
  );
}

export default App;
