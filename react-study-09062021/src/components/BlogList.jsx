const BlogList = (props) => {
  return (
    <section>
      {props.blogProps.map(eachBlog => {
        return (
          <div className="row my-4 mainSection1Row bg-light border border-success" key={eachBlog.id}>
            <div className="col-10 text-center">
              <h4 className="text-dark p-3" id="greetingTexts"> Blog Title: {eachBlog.title} </h4>
              <small className="text-secondary pb-3 py-2"> Author: {eachBlog.author}  </small>
              <p className="text-dark p-3" id="greetingTexts"> Blog Body: {eachBlog.blogBody}  </p>
            </div>
            <div className="col-2 d-flex align-items-center">
              <button onClick={()=>{props.deleteFeatureProp(eachBlog.id)}} className="btn btn-warning">Delete</button>
            </div>
          </div>
        )
      })}



    </section>
  );
}

export default BlogList;