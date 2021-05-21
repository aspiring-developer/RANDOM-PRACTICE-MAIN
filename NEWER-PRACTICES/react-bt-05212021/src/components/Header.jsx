
const Header = (props) => {
  return (
    <header>
      <h1 style={headingStyle}>{props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

const headingStyle = {
  color: 'purple',
  backgroundColor: 'yellow',
  padding: '1rem'
}

export default Header;

