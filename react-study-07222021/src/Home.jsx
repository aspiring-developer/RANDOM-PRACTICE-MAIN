import BlogList from "./BlogList";
import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'This is blog body...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'This is blog body...', author: 'joshi', id: 2 },
    { title: 'Web dev top tips', body: 'This is blog body...', author: 'mario', id: 3 }
  ]);
  const deleteHandler = (targetedId) => {
    const newBlogs = blogs.filter((filteredBlogs) => {
      //console.log(filteredBlogs);
      //console.log(targetedId);
      return filteredBlogs !== targetedId;
    });
    setBlogs(newBlogs);
    console.log(newBlogs);
  }

  return (
    <>
      <BlogList blogsProp={blogs} blockHeader="All Blogs Header" deleteHandler={deleteHandler} />
    </>
  );
}

export default Home;