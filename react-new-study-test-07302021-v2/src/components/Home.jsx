import BlogList from "./BlogList";
import React, { useState, useEffect } from 'react';
const Home = () => {
  const [blogs, setBlogs] = useState(null);

  function deleteFeatureFunction(targetedId) {
    setBlogs(blogs.filter(filteredBlogs => {
      return filteredBlogs.id !== targetedId;
    }))
  };

  useEffect(() => {
    fetch('http://localhost:3030/blogs')
      .then((res) => {
        return res.json()
      }).then((data) => {
        setBlogs(data)
      })
  }, []);


  return (
    <>
      <section>
        <div className="row my-4 mainSection1Row">
          <div className="col p-4 bg-light text-center">
            <h4 className="text-dark p-3" id="greetingTexts"> Simple blog list </h4>
            {/*<div className="input-group mx-auto">
            <input type="text" className="form-control text-center" />
          </div>*/}
            {blogs && <BlogList blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;