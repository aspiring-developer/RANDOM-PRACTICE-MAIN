import BlogPost from "./BlogPost";
import { useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([
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
  ]);

  // Delete Feature
const deleteFeatureFunction = (targetedId)=> {
  console.log("Deleting...");
  setBlogs(blogs.filter(filteredBlogs=>{
return targetedId !== filteredBlogs.id;
  }))
}



  return (
    <div>
      <h1> From Home Component </h1>
      <BlogPost blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />
    </div>
  )
}
