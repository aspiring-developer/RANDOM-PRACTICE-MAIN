import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [blogs, setBlogs] = useState(null);

  // Delete Feature
  function deleteFeatureFunction(targetedId) {
    console.log("Deleting...");
    setBlogs(blogs.filter(filteredBlogs => {
      return targetedId !== filteredBlogs.id;
    }))
  };

  // useEffect
  useEffect(() => {
 setTimeout(() => {
  fetch('http://localhost:8000/blogs')
    .then(res=>{
      return res.json()
    })
      .then(data=>{
        setBlogs(data);
        setIsLoading(false)
      })
 }, 2000);
  }, [])

  return (
    <>
      {/*{setIsLoading(isLoading)}*/}
     {isLoading && <h1 color="red">Loading...</h1>}
      {blogs && <BlogList blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />}
    </>
  );
}

export default Home;