const BlogList = () => {
  return (
    <>

        return (
          <div className="row border border-secondary" >
            <div className="col-9">
              <h3 className="mt-3 text-dark">Title</h3>
              <small className="text-secondary">Author</small>
              <p className="text-secondary pb-3 py-2">Body</p>
            </div>
            <div className="col-3 d-flex justify-content-start align-items-center ">
              <button type="button" className="btn btn-warning " id="frontLgBtn"> Delete </button>
            </div>
          </div>
        )

    </>
  );
}

export default BlogList;