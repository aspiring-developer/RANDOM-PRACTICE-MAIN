import BlogList from "./BlogList";
import { useState, useEffect } from "react";
const Home = () => {
  const [blogs, setBlogs] = useState(null);

  // Delete Feature
  function deleteFeatureFunction(targetedId) {
    setBlogs(blogs.filter(function (filteredBlogs) {
      return targetedId !== filteredBlogs.id;
    }))
  };

  // useEffect Feature
  useEffect(() => {
    fetch('http://localhost:5000/blogs')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBlogs(data);
      })
  },[])

  return (
    <>
      <section>
        <h3 className="text-dark text-center pt-4" id="greetingTexts"> Blog List </h3>
        {blogs && <BlogList blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />}
      </section>
    </>
  );
}

export default Home;