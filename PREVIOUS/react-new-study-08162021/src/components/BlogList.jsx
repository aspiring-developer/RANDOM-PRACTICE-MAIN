const BlogList = (props) => {
  return (
    <>
      {props.blogProps.map(eachBlog => {
        return <div className="row p-2 m-1 mb-4 d-flex align-items-center border border-info rounded" key={eachBlog.id}>
          <div className="col-10">
            <h4>Blog Title: {eachBlog.title}</h4>
            <small className="text-secondary">Author: {eachBlog.author}</small>
            <p>Blog Body: {eachBlog.blogBody}</p>
          </div>
          <div className="col-2">
            <button onClick={() => { props.deleteFeatureProp(eachBlog.id) }} className="btn btn-warning">Delete</button>
          </div>
        </div>
      })}
    </>

  );
}

export default BlogList;