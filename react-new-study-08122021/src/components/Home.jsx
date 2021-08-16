import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isError, setIsError] = useState(null);

  // Delete Feature
  function deleteFeatureFunction(targetedId) {
    console.log("Deleting...", targetedId);
    setBlogs(blogs.filter(filteredBlogs => {
      return filteredBlogs.id !== targetedId;
    }))
  };

  // useEffect
  useEffect(() => {
    fetch('http://localhost:8000/blogss')
      .then(res => {
        if(!res.ok) {
          throw Error("Oops! Something is not working while fetching data!")
        }
        return res.json();
      })
      .then(data=>{
        setBlogs(data);
      })
      .catch(err=>{
        console.log(err.message);
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