const BlogList = (props) => {

  return (
    <>
      {props.blogsProps.map(function (eachBlog) {
        return <div className="row" key={eachBlog.id}>
          <div className="col text-center">
            <h4>Title: {eachBlog.title}</h4>
            <p>Body: {eachBlog.blogBody}</p>
          </div>
          <div className="col">
            <button type="button" className="btn btn-warning" id="frontLgBtn"> Delete </button>
          </div>
          <hr />
        </div>
      })}
    </>
  );
}

export default BlogList;