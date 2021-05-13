import {React, useState} from 'react';

const FormStudy = (props) => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMITTED!!!!!!!");
    props.setItems((prev) => prev.concat({Title: "Test Title", Description: "Test Description", Price: "Test Price"}));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <fieldset>
      <legend> Enter your desired information </legend>
      <input type="text" placeholder="Title" /> <input type="text" placeholder="Description" /> <input type="text" placeholder="Price" />
      <button> ADD TO LIST </button>
      </fieldset>
      </form>
    </>
  )
}

export default FormStudy;
