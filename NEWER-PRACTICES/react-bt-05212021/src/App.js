import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState( [
  {
    id: 1,
    text: 'Buy Eggs',
    day: 'May 21st @ 6:45pm',
    reminder: 'true'
  },
  {
    id: 2,
    text: 'Send Money',
    day: 'May 22nd @ 6:50pm',
    reminder: 'true'
  },
  {
    id: 3,
    text: 'Purchase Lottery',
    day: 'May 23rd @ 7:00pm',
    reminder: 'false'
  }
])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
