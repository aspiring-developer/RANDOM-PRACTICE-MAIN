const BlogList = (props) => {
  return (
    <>
      {props.blogProps.map(function (eachBlog) {
        return (<div className="row my-4 mainSection1Row d-flex justify-content-center align-items-center border border-success p-3" key={eachBlog.id}>
          <div className="col-9 text-center">
            <h4 className="text-dark p-2" id="greetingTexts"> {eachBlog.title} &nbsp;: {eachBlog.id} </h4>
            <small className="text-secondary pb-3 py-2"> {eachBlog.author} </small>
            <p className="text-dark pb-3 py-2"> {eachBlog.blogBody} </p>
          </div>
          <div className="col-3">
            <button type="button" onClick={() => { props.deleteFeatureProp(eachBlog.id) }} className="btn btn-warning " id="frontLgBtn"> Delete Blog </button>
          </div>
        </div>)
      })}
    </>
  );
}

export default BlogList;