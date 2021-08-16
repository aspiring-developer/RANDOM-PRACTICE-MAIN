const BlogList = (props) => {
  return (
    <>
      {props.blogProps.map(eachBlog => {
        return (
          <div className="row border border-secondary p-2 mb-4" key={eachBlog.id}>
            <div className="col-10 text-dark">
              <h3>Title: {eachBlog.title}</h3>
              <small className="text-secondary">Author: {eachBlog.author}</small>
              <p>Body: {eachBlog.blogBody}</p>
            </div>
            <div className="col-2 d-flex align-items-center">
              <button onClick={()=>{props.deleteFeatureProp(eachBlog.id)}} className="btn btn-warning">Delete <i className="fa fa-trash"></i> </button>
            </div>
          </div>
        )
      })}


    </>
  );
}

export default BlogList;