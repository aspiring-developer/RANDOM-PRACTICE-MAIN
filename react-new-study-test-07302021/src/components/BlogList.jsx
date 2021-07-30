const BlogList = (props) => {
  return (
    <div className="row border border-secondary">
              <div className="col-9" key={props.blogProps[0].id}>
                <h3 className="mt-3 text-dark">{props.blogProps[0].title}</h3>
                <small className="text-secondary"> {props.blogProps[0].author} </small>
                <p className="text-secondary pb-3 py-2"> {props.blogProps[0].blogBody} </p>
              </div>
              <div className="col-3 d-flex justify-content-start align-items-center ">
                <button type="button" className="btn btn-warning " id="frontLgBtn"> Delete </button>
              </div>
            </div>
   );
}

export default BlogList;