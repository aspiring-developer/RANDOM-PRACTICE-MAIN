const BlogList = (props) => {
  return (
    <>

          <div className="row border border-secondary p-2 mb-4" >
            <div className="col-10 text-dark">
              <h3>Title: </h3>
              <small className="text-secondary">Author: </small>
              <p>Body: </p>
            </div>
            <div className="col-2 d-flex align-items-center">
              <button className="btn btn-warning"> Delete </button>
            </div>
          </div>
        )

    </>
  );
}

export default BlogList;