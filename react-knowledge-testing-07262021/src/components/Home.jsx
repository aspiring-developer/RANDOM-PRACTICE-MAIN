const Home = () => {
  return (
    <>
    <section>
      <div className="row my-4 mainSection1Row">
        <div className="col p-5 bg-light text-center">
          <h4 className="text-dark p-3" id="greetingTexts"> This is h4 text field. What do you want here? </h4>
          <div className="input-group mx-auto">
            <input type="text" className="form-control text-center" />
          </div>
          <p className="text-secondary pb-3 py-2"> This is a paragraph field. </p>
          <a href="https://google.com"><button type="button" className="btn btn-warning " id="frontLgBtn"> I am a button :) </button> </a>
        </div>
      </div>
    </section>
    </>
   );
}

export default Home;