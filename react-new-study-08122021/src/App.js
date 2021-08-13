import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './reset.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Create from "./components/Create";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid entireDocumentWrapper m-2 p-2 text-warning">
        <div className="allComponentsWrapper m-2 p-2 text-warning">
          <Header />
          <Navbar />
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
