import Button from './Button';

const Header = (props) => {
  const clickHandler = () => {
    console.log('Button clicked!');
  }

  return (
    <header className='header'>
      <h1>{props.title}</h1>
      <Button onClick={clickHandler} color='green' text='Add' />
      <Button color='red' text='Delete' />
      <Button color='steelblue' text='Reset' />
    </header>
  )
}


Header.defaultProps = {
  title: 'Task Tracker'
}

//******* CSS in Javascript */
//const headingStyle = {
//  color: 'purple',
//  backgroundColor: 'yellow',
//  padding: '1rem'
//}

export default Header;

