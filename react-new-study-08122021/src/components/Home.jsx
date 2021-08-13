import BlogList from "./BlogList";
import { useState, useEffect } from 'react';
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);


  // Delete feature
  function deleteFunction(targetedId) {
    console.log("Deleting...");
    setBlogs(blogs.filter(filteredBlogs => {
      return filteredBlogs.id !== targetedId;
    }))
  };

  // useEffect
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogss')
        .then(res => {
          console.log(res)
          if (!res.ok) {
            throw Error('Oops, something went wrong while fetching data!')
          }
          return res.json();
        })
        .then(data => {
          setBlogs(data);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err.message);
          setIsError(err.message);
          setIsLoading(false);
        })
    }, 1000);
  }, [])

  return (
    <>
      <section>
        <div className="row my-4 mainSection1Row">
          <div className="col p-5 bg-light">
            <h2 className="text-dark p-3 text-center"> Blog List  </h2>
            {isError && <h2 className="text-danger">{isError}</h2>}
            {isLoading && <h1>Loading...</h1>}
            {blogs && <BlogList blogProp={blogs} deleteProp={deleteFunction} />}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

