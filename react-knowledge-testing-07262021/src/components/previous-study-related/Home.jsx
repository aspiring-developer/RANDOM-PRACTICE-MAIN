import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "First Blog Title", blogBody: "Blog body of blog1...", author: "Mike Davis", id: 1 },
    { title: "Second Blog Title", blogBody: "Blog body of blog2...", author: "Dan Thomas", id: 2 },
    { title: "Third Blog Title", blogBody: "Blog body of blog3...", author: "Chris Clark", id: 3 }
  ]);

  function deleteFeatureFunction(targetedId) {
    setBlogs(blogs.filter(function (filteredBlog) {
      return filteredBlog.id !== targetedId;
    })
    )
  }

  return (
    <>
      <section>
        <h4 className="text-dark p-3 text-center" id="greetingTexts"> The List will Display Below </h4>
        <BlogList blogsProp={blogs} deleteFeatureProp={deleteFeatureFunction} />
        {/*<BlogList blogsProp={blogs} deleteFeatureProp="Nothing" />*/}
        <p className="text-secondary pb-3 py-2 text-center"> Adding the list information in this line, later. </p>
      </section>
    </>
  );
}

export default Home;

/*<div className="input-group mx-auto">
           <input type="text" className="form-control text-center" placeholder="Use this input field or delete it!"/>
         </div>*/

         //  //id() { //  return new Date().getTime()        //}