import BlogList from './BlogList';

const Home = () => {
  const blogs = [
    { "title": "First Blog", "blogBody": "First blog body...", "author": "- Dan Thomas", "id": 100 },
    { "title": "Second Blog", "blogBody": "Next blog body...", "author": "- Chris Clark", "id": 200 },
    { "title": "Third Blog", "blogBody": "Third blog body...", "author": "- George Tsai", "id": 300 },
  ]

  return (
    <>
      <section>
        <div className="row my-4 mainSection1Row">
          <div className="col p-4 bg-light text-center">
            <h4 className="text-dark p-3" id="greetingTexts"> Simple blog list </h4>
            {/*<div className="input-group mx-auto">
            <input type="text" className="form-control text-center" />
          </div>*/}
 <BlogList  blogProps={blogs} />

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;