import React from 'react';

const Footer = () => {
  let date = new Date();
  const currentYear = date.getFullYear();
  const age = 42;
  return (
    <>
      <small>This is from footer component...</small>
      {/*Both ways below are fine...*/}
      <p> Copyright: {date.getFullYear()} | Birth Year: {currentYear - age} </p>
    </>
  )
}

export default Footer;
