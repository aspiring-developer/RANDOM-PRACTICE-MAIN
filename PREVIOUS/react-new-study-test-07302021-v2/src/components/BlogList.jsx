const BlogList = (props) => {
  return (
    <>
      {props.blogProps.map(eachBlog => {
        return (
          <div className="row border border-secondary" key={eachBlog.id}>
            <div className="col-9">
              <h3 className="mt-3 text-dark">{eachBlog.title}</h3>
              <small className="text-secondary">{eachBlog.author}</small>
              <p className="text-secondary pb-3 py-2">{eachBlog.blogBody}</p>
            </div>
            <div className="col-3 d-flex justify-content-start align-items-center ">
              <button type="button" onClick={() => { props.deleteFeatureProp(eachBlog.id) }} className="btn btn-warning " id="frontLgBtn"> Delete </button>
            </div>
          </div>
        )
      })}
    </>
  );
}

export default BlogList;