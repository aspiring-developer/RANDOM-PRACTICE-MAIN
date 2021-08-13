const BlogList = (props) => {
  return (
    props.blogProp.map(eachBlog => {
      return <div className="row border border-secondary p-2" key={eachBlog.id}>
        <div className="col-10 text-dark">
          <h3>{eachBlog.title}</h3>
          <small className="text-secondary">{eachBlog.author}</small>
          <p>{eachBlog.blogBody}</p>
        </div>
        <div className="col-2 d-flex align-items-center">
          <button onClick={() => { props.deleteProp(eachBlog.id) }} className="btn btn-warning">Delete <i className="fa fa-trash"></i></button>
        </div>
      </div>
    })

  );
}
export default BlogList;