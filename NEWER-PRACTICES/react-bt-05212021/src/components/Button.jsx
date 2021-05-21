import PropTypes from 'prop-types';

const Button = (props) => {
  return  <button onClick={props.onClick} style={{backgroundColor: props.color}} className='btn'>{props.text}</button>
}

export default Button;

Button.defaultProps = {
  backgroundColor: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

//const Button = ({color, text}) => {
//  return  <button style={{backgroundColor: color}} className='btn'>{text}</button>
//}

//export default Button;
