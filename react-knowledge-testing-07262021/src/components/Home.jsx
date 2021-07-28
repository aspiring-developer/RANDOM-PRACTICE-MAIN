import BlogList from "./BlogList";
import { useState } from "react";
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "First Blog Title", blogBody: "Blog body of blog1...", author: "Mike Davis", id: 1 },
    { title: "Second Blog Title", blogBody: "Blog body of blog2...", author: "Dan Thomas", id: 2 },
    { title: "Third Blog Title", blogBody: "Blog body of blog3...", author: "Chris Clark", id: 3 }
  ]);

  function deleteFeatureFunction(targetedId) {
    setBlogs(blogs.filter(function(filteredBlog) {
      return filteredBlog.id !== targetedId;
    }))
  };

  //function addFeatureFunction() {
  //  setBlogs(blogs.push(blogInput.value))
  //}

  return (
    <>
      <BlogList blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />
      {/*addFeatureProp={addFeatureFunction}*/}
    </>
  );
}

export default Home;