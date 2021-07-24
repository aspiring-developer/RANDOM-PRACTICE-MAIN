import BlogList from "./BlogList";
import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'This is blog body...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'This is blog body...', author: 'joshi', id: 2 },
    { title: 'Web dev top tips', body: 'This is blog body...', author: 'mario', id: 3 }
  ]);
  function deleteHandlerFunction(targetedId) {
    setBlogs(blogs.filter(function(filteredBlogs) {
      return filteredBlogs.id !== targetedId;
    }));
  }
  return (
    <>
      <BlogList blogsProp={blogs} blockHeader="All Blogs Header" deleteHandlerProp={deleteHandlerFunction} />
    </>
  )
}

export default Home;