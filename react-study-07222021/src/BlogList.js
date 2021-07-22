const BlogList = (props) => {
  return (
    <div className="blog-list">
      <h2>{props.headerProp}</h2>
      {props.blogsProp.map((eachBlog) => {
        return (
          <div className="blog-preview" key={eachBlog.id}>
            <h2>{eachBlog.title}</h2>
            <p>Written by: {eachBlog.author}</p>
            <p>{eachBlog.body}</p>
            <button onClick={() => props.handleDeleteProp(eachBlog.id)}> Delete Blog</button>
          </div>
        )
      })}
    </div>
  );
}

export default BlogList;