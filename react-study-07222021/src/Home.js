import BlogList from './BlogList';
import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'This is blog body...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'This is blog body...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'This is blog body...', author: 'mario', id: 3 }
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} />
    </div>
  );
}

export default Home;