import BlogList from './BlogList';
import React, { useState, useEffect } from 'react';

const Home = () => {

  const [blogs, setBlogs] = useState(null);

  // Delete Feature
  function deleteFeatureFunction(targetedId) {
    setBlogs(blogs.filter(function (filteredBlogs) {
      return filteredBlogs.id !== targetedId;
    }))
  };

  useEffect(function () {
    fetch('http://localhost:8000/blogs')
      .then(function (res) {
        return res.json()
      }).then(function (data) {
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
            {blogs && <BlogList blogProps={blogs} deleteFeatureProps={deleteFeatureFunction} />}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;