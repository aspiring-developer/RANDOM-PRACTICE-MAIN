import Task from './Task';
const Tasks = (props) => {
  return (
    <>
      {/*{props.tasks.map((eachTask) => (<h2 key={eachTask.id} > { eachTask.text} </h2>)*/}
      {props.tasks.map((eachTask) => (
        <Task key={eachTask.id} eachTask={ eachTask.text} />
      ))}


    </>
  )
}
export default Tasks;

