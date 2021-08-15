const BlogList = (props) => {
  return (
    <>
      <div className="row border border-secondary p-2 mb-4">
        <div className="col-10 text-dark">
          <h3>Title: {props.blogProps[0].title}</h3>
          <small className="text-secondary">Author: {props.blogProps[0].author}</small>
          <p>Body: {props.blogProps[0].blogBody}</p>
        </div>
        <div className="col-2 d-flex align-items-center">
         button goes
        </div>
      </div>

    </>
  );
}

export default BlogList;