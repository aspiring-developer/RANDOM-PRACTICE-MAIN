import BlogList from "./BlogList";
import { useState, useEffect } from 'react';
const Home = () => {

  const [blogs, setBlogs] = useState(null);

  // Delete Feature Function
  const deleteFunction = (targetedId) => {
    console.log("Deleting...");
    setBlogs(blogs.filter(function (filteredBlogs) {
      return filteredBlogs.id !== targetedId;
    }))
  };

  // useEffect hook
  useEffect(function () {
    fetch('http://localhost:5000/blogs')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBlogs(data);
      })
  }, []);


  return (
    <>
      <section>
        <div className="row my-4 mainSection1Row">
          <div className="col p-5 bg-light">
            <h2 className="text-dark p-3 text-center" id="greetingTexts"> Blog List  </h2>
            {blogs &&  <BlogList blogProp={blogs} deleteProp={deleteFunction} />}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;