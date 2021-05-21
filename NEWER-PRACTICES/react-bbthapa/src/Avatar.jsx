import React from 'react';
import './Avatar.css';
import 'tachyons';


const Avatar = (props) => {
  return (
    <div className="avatarStyle ma4 bg-light-purple dib pa4">
      <img src="https://joeschmoe.io/api/v1/Richardson" alt="Avatar" />
      <h2 className="">{props.name}</h2>
      <p className="">{props.position}</p>
    </div>
  )
}

export default Avatar;
