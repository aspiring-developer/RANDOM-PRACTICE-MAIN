
const BlogList = (props) => {

  return (
    <div className="row my-0 d-flex align-items-center border border-secondary" >
      <div className="col-10 p-5 bg-light text-center">
        <h4 className="text-dark p-3" id="greetingTexts"> All Blogs </h4>
        <p className="text-secondary pb-3 py-2"> Blog Title:  {props.blogsProp[0].title} </p>
        <small className="text-secondary pb-3 py-2"> Author: {props.blogsProp[0].author} </small>
        <p className="text-secondary pb-3 py-2"> Blog Title: {props.blogsProp[0].blogBody} </p>
      </div>
      <div className="col-2"> <button type="button" className="btn btn-warning " id="frontLgBtn"> Delete </button>
      </div>
    </div>
  )
}
export default BlogList;

