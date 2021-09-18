import BlogPost from "./BlogPost";
import { useState, useEffect } from "react";


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState(null);
  //const [error, setError] = useState(null);

  // Delete Feature
  const deleteFeatureFunction = (targetedId) => {
    console.log("Deleting...");
    setBlogs(blogs.filter(filteredBlogs => {
      return targetedId !== filteredBlogs.id;
    }))
  };

  useEffect(() => {
    fetch('http://localhost:8000')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBlogs(data)
      })
  })
  return (
    <div>
      {blogs && <BlogPost blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />}
      {loading && setLoading(<h1>Loading...</h1>)}
    </div>
  )
}
