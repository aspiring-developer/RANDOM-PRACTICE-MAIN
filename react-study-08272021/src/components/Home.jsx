import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);

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
        .then(res => {
          if (!res.ok) {
            throw Error('Oops! Something went wrong while fetching data');
          }
          return res.json()
        })
        .then(data => {
          setBlogs(data);
          setIsLoading(false);
          setError(null);
        })
        .catch(err => {
          console.log(err.message);
          setError(err.message);
          setIsLoading(false);
        })
    }, 2000);
  }, [])

  return (
    <>
      {isLoading && <h1 color="red">Loading...</h1>}
      {error && <h1 color="red">{error}</h1>}
      {blogs && <BlogList blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />}
    </>
  );
}

export default Home;