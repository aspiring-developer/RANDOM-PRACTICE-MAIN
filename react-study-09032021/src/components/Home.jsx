import BlogList from "./BlogList";
import {useState} from 'react';
const Home = () => {
  const [blogs, setBlogs] = useState(
    [
    {
      "title": "First Blog Title",
      "author": "Mike Pence",
      "blogBody": "First Blog Body: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nesciunt?",
      "id": 100
    },
    {
      "title": "Second Blog Title",
      "author": "George Tsai",
      "blogBody": "Second Blog Body: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nesciunt?",
      "id": 200
    },
    {
      "title": "Third Blog Title",
      "author": "Chris Clark",
      "blogBody": "Third Blog Body: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nesciunt?",
      "id": 300
    }
  ]
  );

  // delete feature
  const deleteFeatureFunction = (targetedId) => {
console.log("Deleting...");
setBlogs(blogs.filter(filteredBlogs=>{
  return filteredBlogs.id !== targetedId;
}))
  }

  return (
    <>
      <BlogList blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />
    </>
  );
}

export default Home;