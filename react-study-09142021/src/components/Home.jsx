import BlogList from "./BlogList";
import { useState, useEffect } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  // Delete Feature
  const deleteFeatureFunction = (targetedId) => {
    console.log("Deleting...");
    setBlogs(blogs.filter(filteredBlogs => {
      return targetedId !== filteredBlogs.id;
    }))
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if(!res.ok) {
            throw Error('Oops! Something went wrong while fetching data.');
          }
          return res.json()
        })
        .then(data => {
          setBlogs(data)
          setLoading(false);
        })
        .catch(err=>{
          console.log(err.message);
          setIsError(err.message);
          setLoading(false);
        })
    }, 2000);
  }, [])

  return (
    <>
      {blogs && <BlogList blogsProp={blogs} deleteFeatureProp={deleteFeatureFunction} />}
      {loading && <h1>Loading...</h1>}
      {Error && <h1>{isError}</h1>}
      {/*{isError && <h1>{err.message}</h1>}*/}
    </>
  );
}
export default Home;