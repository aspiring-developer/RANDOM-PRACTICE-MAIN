import BlogList from "./BlogList";

const Home = () => {


  return (
    <>
      <section>
        <div className="row my-4 mainSection1Row">
          <div className="col p-4 bg-light text-center">
            <h4 className="text-dark p-3" id="greetingTexts"> Simple blog list </h4>
            {/*<div className="input-group mx-auto">
            <input type="text" className="form-control text-center" />
          </div>*/}
     <BlogList />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;