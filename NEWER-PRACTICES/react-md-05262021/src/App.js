import CountButton from './components/CountButton';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <h1> Welcome to the app! </h1>
      <SearchBar />
      <CountButton incrementBy={1} />
      <CountButton incrementBy={5} />
    </div>
  );
}

export default App;
