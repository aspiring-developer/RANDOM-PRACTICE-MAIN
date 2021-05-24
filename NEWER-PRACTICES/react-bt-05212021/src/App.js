import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="container">
      <Header />
      <Tasks id={Tasks.id} text={Tasks.text} day={Tasks.day} reminder={Tasks.reminder} />
    </div>
  );
}


export default App;
