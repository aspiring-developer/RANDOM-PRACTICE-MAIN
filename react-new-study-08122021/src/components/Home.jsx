import BlogList from "./BlogList";
const Home = () => {
  const blogs = [
    {
      "title": "First blog title",
      "author": "Brad Traverse",
      "blogBody": "First blog body texts: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, vel?"
    },
    {
      "title": "Second blog title",
      "author": "Net Ninja",
      "blogBody": "Second blog body texts: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, vel?"
    },
    {
      "title": "Third blog title",
      "author": "Caleb Curry",
      "blogBody": "Third blog body texts: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, vel?"
    }

  ]
  return (
    <>
      <section>
        <div className="row my-4 mainSection1Row">
          <div className="col p-5 bg-light">
            <h2 className="text-dark p-3 text-center" id="greetingTexts"> Blog List  </h2>
            <BlogList blogProp={blogs} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;