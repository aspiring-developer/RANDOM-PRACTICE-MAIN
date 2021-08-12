const BlogList = (props) => {
  return (
    props.blogProp.map(eachBlog => {
        return (
          <div className="row border border-secondary p-2">
            <div className="col-10">

              <h4 className="text-secondary pb-3 py-2"> {eachBlog.title} </h4>
              <small className="text-secondary pb-3 py-2"> {eachBlog.author} </small>
              <p className="text-secondary pb-3 py-2"> {eachBlog.blogBody} </p>
            </div>
            <div className="col-2 text-left d-flex align-items-center">
              <button type="button" className="btn btn-warning " id="frontLgBtn"> Delete <i className='fa fa-trash'> </i> </button>
            </div>
          </div>

        )
      })
  )
}

export default BlogList;