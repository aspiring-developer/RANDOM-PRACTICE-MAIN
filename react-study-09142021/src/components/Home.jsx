import BlogPost from "./BlogPost";
import { useState, useEffect } from "react";


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState(null);
  //const [error, setError] = useState(null);

  // Delete Feature
const deleteFeatureFunction = (targetedId)=> {
  console.log("Deleting...");
  setBlogs(blogs.filter(filteredBlogs=>{
return targetedId !== filteredBlogs.id;
  }))
};





  return (
    <div>
      <BlogPost blogProps={blogs} deleteFeatureProp={deleteFeatureFunction} />
      {setTimeout(() => {
      return setLoading(<h1>Loading...</h1>)
    }, 2000)};
    </div>
  )
}
