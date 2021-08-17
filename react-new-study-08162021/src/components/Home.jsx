import BlogList from "./BlogList";
import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      "title": "First Blog Title",
      "author": "Shaun Net Ninja",
      "blogBody": "First Blog Body: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, error!",
      "id": 100
    },
    {
      "title": "Second Blog Title",
      "author": "Brad Traversy",
      "blogBody": "Second Blog Body: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, error!",
      "id": 200
    },
    {
      "title": "Third Blog Title",
      "author": "Angela Yau",
      "blogBody": "Third Blog Body: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, error!",
      "id": 300
    }
  ]
  );

  // Delete feature
 function deleteFeatureFunction (targetedId) {
    setBlogs(blogs.filter(function (filteredBlogs) {
      console.log("Deleting...");
      return filteredBlogs.id !== targetedId;
    }))
  }

  return (
    <>
      <h1 className="m-2 my-4 text-center text-dark">Blog List</h1>


      <BlogList blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />

    </>
  );
}

export default Home;