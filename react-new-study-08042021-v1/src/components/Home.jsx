import BlogList from "./BlogList";
import { useState, useEffect } from "react";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

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
          if (!res.ok) {
            throw Error("The fetch request is throwing an error. Check the fetch block of codes.");
          }
          return res.json();
        })
        .then(data => {
          setBlogs(data);
          setIsLoading(false);
          setIsError(null);
        })
        .catch(err => {
          setIsLoading(false);
          setIsError(err.message);
        })
    }, 1000);
  }, []);

  return (
    <>
      <section>
        <h3 className="text-dark text-center pt-4" id="greetingTexts"> Blog List </h3>
        {blogs && <BlogList blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />}
        {isError && <h1 className="font-weight-bold">{isError}</h1>}
        {isLoading && <h1 className="font-weight-bold">LOADING...</h1>}
      </section>
    </>
  );
}

export default Home;