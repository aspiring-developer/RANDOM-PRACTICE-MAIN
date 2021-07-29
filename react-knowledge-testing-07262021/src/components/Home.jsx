import BlogList from "./BlogList"
import React, {useState} from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "First Blog", blogBody: "Blog body of blog1...", author: "Mike Davis", id: 1 },
    { title: "Next Blog", blogBody: "Blog body of blog2...", author: "Dan Thomas", id: 2 },
    { title: "Third Blog", blogBody: "Blog body of blog3...", author: "Chris Clark", id: 3 }
  ]);

  function deleteFeatureFunction(targetedId) {
    console.log("Working!!!");

      setBlogs(blogs.filter((filteredBlog)=> {
        return filteredBlog.id !== targetedId;
      }))
    }


  return (
    <>
<BlogList blogProp={blogs} deleteFeatureProp={deleteFeatureFunction}/>
    </>
   );
}

export default Home;