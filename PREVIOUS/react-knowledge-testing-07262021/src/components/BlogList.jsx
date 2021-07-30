const BlogList = (props) => {
  return (
    <>
      <h2>Blog List</h2>
      {props.blogProp.map(function (eachBlog) {
        return (
          <div className="m-2 p-2" key={eachBlog.id}>
            <h4>{eachBlog.title}</h4>
            <p>{eachBlog.blogBody}</p>
            <small>{eachBlog.author}</small>
            <br />
            <button onClick={() => { props.deleteFeatureProp(eachBlog.id) }} className="btn btn-warning p-2">Delete {eachBlog.title} <i className="fa fa-trash"></i></button>
          </div>)
      })}

    </>
  );
}

export default BlogList;