import BlogList from "./BlogList";
import { useState, useEffect } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Delete Feature
  function deleteFeatureFunction(targetedId) {
    console.log("Deleting...");
    setBlogs(blogs.filter((filteredBlogs) => {
      return filteredBlogs.id !== targetedId;
    })
    )
  };

  // useEffect
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")

        .then(res => {
          if (!res.ok) {
            throw Error("Oops! Something did not work while fetching data.")
          }
          return res.json();
        })
        .then(data => {
          setBlogs(data);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err.message);
          setError(err.message);
          setIsLoading(false);
        })
    }, 1000);

  }, [])

  return (
    <>
      <div className="col mt-4 mb-2">
        <h2>Blog List: </h2>
      </div>
      <div className="col">
        {isLoading && <h1 className="text-warning">Loading...</h1>}
        {error && <h1 className="text-danger">{error}</h1>}
        {blogs && <BlogList blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />}
      </div>

    </>
  );
}

export default Home;