const BlogList = (props) => {
  return (
    <>
      <h1>Blogs Header: {props.blockHeader}</h1>

      {props.blogsProp.map(function (eachBlog) {
        return (
          <div key={eachBlog.id}>
            <h2>Blog Title: {eachBlog.title}</h2>
            <p>Blog Author: {eachBlog.author}</p>
            <button onClick={() =>props.deleteHandler(eachBlog.id)}>Delete Me</button>
          </div>
        )
      })}

    </>
  )
}

export default BlogList;