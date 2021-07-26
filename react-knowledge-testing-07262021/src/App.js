import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './reset.css';

function App() {
  return (
    <div className="container-fluid entireDocumentWrapper m-2 p-0">
    <div className="allComponentsWrapper m-0 p-0">
      <Header />
      <Home />
      <Footer />
      </div>
    </div>
  );
}

export default App;
