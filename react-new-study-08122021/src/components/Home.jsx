import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  // Delete Feature
  function deleteFeatureFunction(targetedId) {
    console.log("Deleting...", targetedId);
    setBlogs(blogs.filter(filteredBlogs => {
      return filteredBlogs.id !== targetedId;
    }))
  };

  // useEffect
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data=>{
        setBlogs(data);
      })

  }, [])

  return (
    <>
      <h1 className="m-2 my-4 text-center text-dark">Blog List</h1>
      {blogs && <BlogList blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />}
    </>
  );
}

export default Home;