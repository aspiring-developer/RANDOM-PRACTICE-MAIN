import BlogList from "./BlogList"
import React, { useState, useEffect } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  function deleteFeatureFunction(targetedId) {
    setBlogs(blogs.filter((filteredBlog) => {
      return filteredBlog.id !== targetedId;
    }))
  };
  useEffect(function () {
    fetch('http://localhost:3030/blogs')
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      })
  }, [])


  return (
    <>
      {blogs && <BlogList blogProp={blogs} deleteFeatureProp={deleteFeatureFunction} />}
    </>
  );
}

export default Home;