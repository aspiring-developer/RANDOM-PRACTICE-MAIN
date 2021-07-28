import BlogList from "./BlogList";
import {useState} from "react";
const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "First Blog Title", blogBody: "Blog body of blog1...", author: "Mike Davis", id: 1 },
    { title: "Second Blog Title", blogBody: "Blog body of blog2...", author: "Dan Thomas", id: 2 },
    { title: "Third Blog Title", blogBody: "Blog body of blog3...", author: "Chris Clark", id: 3 }
  ]);

  return (
    <>
      <section>
        <h4 className="text-dark p-3 text-center" id="greetingTexts"> The List will Display Below </h4>
        <BlogList blogsProps={blogs}/>
        <p className="text-secondary pb-3 py-2 text-center"> Adding the list information in this line, later. </p>
      </section>
    </>
  );
}

export default Home;