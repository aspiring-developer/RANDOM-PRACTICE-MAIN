import React from 'react';
import './Avatar.css';
import 'tachyons';


const Avatar = (props) => {
  return (
    <div className="avatarStyle tc ma4 bg-light-purple dib pa4">
      <img src={props.imgURL} alt={props.imgAlt} />
      <h2>{props.name}</h2>
      <p>{props.position}</p>
    </div>
  )
}

export default Avatar;
