
const BlogList = (props) => {
  return (
    props.blogProps.map(eachBlog => {
      return (
        <div className="row my-0 d-flex align-items-center border border-secondary">
          <div className="col-10 p-5 bg-light text-center">
            <h4 className="text-dark p-3" id="greetingTexts"> All Blogs </h4>
            <p className="text-secondary pb-3 py-2"> Blog Title: {eachBlog.title} </p>
            <small className="text-secondary pb-3 py-2"> Author: {eachBlog.author} </small>
            <p className="text-secondary pb-3 py-2"> Blog Title: {eachBlog.blogBody} </p>
          </div>
          <div className="col-2"> <button type="button" onClick={()=>{}}className="btn btn-warning " id="frontLgBtn"> Delete </button>
          </div>
        </div>
      )
    })

  );
}
export default BlogList;