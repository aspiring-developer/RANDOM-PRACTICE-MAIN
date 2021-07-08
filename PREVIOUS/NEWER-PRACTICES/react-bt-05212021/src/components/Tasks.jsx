import Task from './Task';
const Tasks = (props) => {
  return (
    <>
      {props.tasks.map((eachTask) => {
        return <Task key={eachTask.id} taskList={eachTask} />
        //return <h3>{eachTask.text}</h3>
      })}
    </>
  )
}
export default Tasks;

