import BlogList from "./BlogList";
import { useState, useEffect } from "react";
const Home = () => {
  const [blogs, setBlogs] = useState(null);

  function deleteFeatureFunction(targetedId) {
    setBlogs(blogs.filter(function (filteredBlog) {
      return filteredBlog.id !== targetedId;
    }))
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then(res => {
        return res.json();
      })
      .then((myData) => {
        setBlogs(myData)
      })
  }, [])

  return (
    <>
      {blogs && <BlogList blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />}
    </>
  );
}

export default Home;
