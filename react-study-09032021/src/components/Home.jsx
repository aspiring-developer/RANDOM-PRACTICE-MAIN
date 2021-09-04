import BlogList from "./BlogList";
import { useState, useEffect } from 'react';
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);
  //const [loading, setloading] = useState(null);

  // delete feature
  const deleteFeatureFunction = (targetedId) => {
    console.log("Deleting...");
    setBlogs(blogs.filter(filteredBlogs => {
      return filteredBlogs.id !== targetedId;
    }))
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogss')
        .then(res => {
          if (!res.ok) {
            throw Error('Oops! Something went wrong!!')
          }
          return res.json()
            .then(data => {
              setBlogs(data)
            })
            .catch(err => {
              console.log(err.message);
              setError(err.message);
            })
        })
    }, 2000);
  }, [])

  return (
    <>
      {blogs && <BlogList blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />}
      {error && <h1>{error}</h1>}
    </>
  );
}

export default Home;