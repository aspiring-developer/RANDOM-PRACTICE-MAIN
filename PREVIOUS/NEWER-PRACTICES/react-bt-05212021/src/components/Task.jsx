import {FaTimes} from 'react-icons/fa';

  const Task = (props) => {
  return (

    <div className='task'>

      <h3>{props.taskList.text} <FaTimes style={{color: 'red', pointer: 'cursor'}}/> </h3>
      <p>{props.taskList.day}</p>

    </div>
  )
}

export default Task;
