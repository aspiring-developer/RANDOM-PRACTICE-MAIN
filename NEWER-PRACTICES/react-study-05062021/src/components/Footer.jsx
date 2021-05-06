import React from 'react';

const Footer = () => {
  let date = new Date();
  const currentYear = date.getFullYear();
  const age = 42;
  const theName = "Someone";
  return (
    <>
      <p style={{ color: "blue", fontSize: "20px" }}>Created by: {theName} </p>
      <small>This is from footer component...</small>
      <p> Copyright: {currentYear} | Birth Year: {currentYear - age} </p>
    </>
  )
}

export default Footer;
