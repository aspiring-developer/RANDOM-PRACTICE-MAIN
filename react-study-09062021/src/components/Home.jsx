import BlogList from "./BlogList";
import { useState, useEffect } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(null);

  // Delete Feature
  const deleteFeatureFunction = (targetedId) => {
    console.log("Deleting...");
    setBlogs(blogs.filter(filteredBlogs => {
      return targetedId !== filteredBlogs.id;
    }))
  }

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBlogs(data)
      })
  }, [])


  return (
    <>
      {blogs && <BlogList blogsProp={blogs} deleteFeatureProp={deleteFeatureFunction} />}
    </>
  );
}
export default Home;