import BlogList from './BlogList';
import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'This is blog body...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'This is blog body...', author: 'joshi', id: 2 },
    { title: 'Web dev top tips', body: 'This is blog body...', author: 'mario', id: 3 }
  ]);

  return (
    <div className="home">
      {/*<BlogList blogsProp={blogs} headerProp="ALL blogs header" handleDeleteProp={handleDeleteFunc} />*/}
      <BlogList blogsProp={blogs} headerProp="ALL blogs header" />
    </div>
  );

  // Delete Feature (THIS GOES ABOVE THE RETURN BLOCK)
  //const handleDeleteFunc = (targetedId) => {
  //  // Filter Returns remaining blogs except the targeted(clicked for delete) one
  //  const newBlogs = blogs.filter(filteredBlog => filteredBlog.id !== targetedId)
  //  setBlogs(newBlogs);
  //}
}

export default Home;