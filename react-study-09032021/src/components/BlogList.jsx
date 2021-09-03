const BlogList = () => {
  return (
    <>
<section>
      <div className="row my-4 d-flex align-items-center">
        <div className="col-10 p-5 bg-light text-center">
          <h4 className="text-dark p-3" id="greetingTexts"> All Blogs </h4>
          <p className="text-secondary pb-3 py-2"> Blog Title:  </p>
          <small className="text-secondary pb-3 py-2"> Author:  </small>
         </div>
         <div className="col-2"> <button type="button" className="btn btn-warning " id="frontLgBtn"> Delete </button>
         </div>

      </div>
    </section>
    </>
  );
}
export default BlogList;