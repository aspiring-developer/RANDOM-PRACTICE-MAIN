import BlogList from "./BlogList";
import { useState, useEffect } from "react";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Delete Feature
  function deleteFeatureFunction(targetedId) {
    setBlogs(blogs.filter(function (filteredBlogs) {
      return targetedId !== filteredBlogs.id;
    }))
  };

  // Delete useEffect Feature
  useEffect(() => {
setTimeout(() => {
  fetch('http://localhost:5000/blogs')
  .then(res => {
    return res.json()
  })
  .then(data => {
    setBlogs(data);
    setIsLoading(false);
  })
  .catch(err => {
    console.log(err.message);
  })
}, 1000);
  }, []);

  //// Loading useEffect Feature
  //useEffect(() => {
  //  setIsLoading(false);
  //},[])

  return (
    <>
      <section>
        <h3 className="text-dark text-center pt-4" id="greetingTexts"> Blog List </h3>
        {blogs && <BlogList blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />}
        {isLoading && <h1 className="font-weight-bold">LOADING...</h1>}
      </section>
    </>
  );
}

export default Home;