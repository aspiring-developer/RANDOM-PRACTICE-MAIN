import BlogList from "./BlogList";

const Home = () => {
  const blogs = [
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

  return (
    <>
    <BlogList blogProps={blogs} />
    </>
   );
}

export default Home;