import BlogList from "./BlogList";
import { useState, useEffect } from 'react';
const Home = () => {
  const [blogs, setBlogs] = useState(null)
  // Delete feature
  function deleteFunction(targetedId) {
    console.log("Deleting...");
    setBlogs(blogs.filter(filteredBlogs => {
      return filteredBlogs.id !== targetedId;
    }))
  };

  // useEffect
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
  }, [])

  return (
    <>
      <section>
        <div className="row my-4 mainSection1Row">
          <div className="col p-5 bg-light">
            <h2 className="text-dark p-3 text-center"> Blog List  </h2>
            {blogs && <BlogList blogProp={blogs} deleteProp={deleteFunction} />}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

