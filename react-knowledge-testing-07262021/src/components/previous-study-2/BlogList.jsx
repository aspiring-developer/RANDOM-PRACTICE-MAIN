const BlogList = (props) => {
  return (
    <>
      {props.blogProps.map(function (eachBlog) {
        return (
          <div className="row m-4" key={eachBlog.id}>
            <div className="col text-center">
              <h4>Blog Title: {eachBlog.title}</h4>
              <p>Blog Body: {eachBlog.blogBody}</p>
            </div>
            <div className="col text-left">
              <button className="btn btn-danger" onClick={function () { return props.deleteFeatureProp(eachBlog.id) }}>Delete {eachBlog.title} <i className="fa fa-trash"></i></button>
            </div>
          </div>
        )
      })}
    </>
  );
}

export default BlogList;