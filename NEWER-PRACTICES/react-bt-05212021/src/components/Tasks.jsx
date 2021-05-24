const tasks = [
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
]

const Tasks = (props) => {
  return (
    <>
      {tasks.map(function (eachTask) {
        return <li key={eachTask.id}>{eachTask.text} {eachTask.day} {eachTask.reminder}  </li>
      })
      }
    </>
  )
}
export default Tasks;
