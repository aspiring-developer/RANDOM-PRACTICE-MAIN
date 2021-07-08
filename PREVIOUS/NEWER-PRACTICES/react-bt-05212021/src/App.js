import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasksData, setTasks] = useState([
    {
      id: 1,
      text: 'Go to work',
      day: 'May 21st @ 7:00am',
      reminder: 'true'
    },
    {
      id: 2,
      text: 'Grocery shopping',
      day: 'May 22nd @ 6:50pm',
      reminder: 'true'
    },
    {
      id: 3,
      text: 'Watch movie',
      day: 'May 23rd @ 8:00pm',
      reminder: 'false'
    }
  ])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasksData} />
    </div>
  );
}

export default App;
