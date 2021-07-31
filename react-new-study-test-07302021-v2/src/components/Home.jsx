import BlogList from "./BlogList";
import { useState, useEffect } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function deleteFeatureFunction(targetedId) {
    setBlogs(blogs.filter((filteredBlogs) => {
      return filteredBlogs.id !== targetedId;
    }))
  };

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:4000/blogs')
        .then((res) => {
          console.log(res)
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err.message)
        })
    }, 1000);
  }, [])

  return (
    <>
      <section>
        <div className="row my-4 mainSection1Row">
          <div className="col p-4 bg-light text-center">
            <h4 className="text-dark p-3" id="greetingTexts"> Simple blog list </h4>
            {/*<div className="input-group mx-auto">
            <input type="text" className="form-control text-center" />
          </div>*/}
            {isLoading && <h1>LOADING...</h1>}
            {blogs && <BlogList blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;