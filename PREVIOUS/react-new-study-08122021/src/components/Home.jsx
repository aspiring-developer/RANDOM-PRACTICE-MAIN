import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
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
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if (!res.ok) {
            throw Error("Oops! Something is not working while fetching data!")
          }
          return res.json();
        })
        .then(data => {
          setBlogs(data);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err.message);
          setIsError(err.message);
        })
    }, 2000);

  }, [])

  return (
    <>
      <h1 className="m-2 my-4 text-center text-dark">Blog List</h1>
      {/*{isLoading && <h1 className="text-danger">Loading...</h1>}*/}
      {isLoading && <div className="col" role="status">
      <div className="spinner-border" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow" role="status">
  <span className="sr-only">Loading...</span>
</div>
      </div>}
      {isError && <h3 className="text-danger">{isError}</h3>}
      {blogs && <BlogList blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />}
    </>
  );
}

export default Home;