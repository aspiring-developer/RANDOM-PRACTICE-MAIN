const BlogList = (props) => {
  return (
    <>
      <h1>Blogs Header: {props.blockHeader}</h1>

      {props.blogsProp.map(function (eachBlog) {
  return (

      <div>
        <h2>Blog Title: {eachBlog.title}</h2>
        <p>Blog Author: {eachBlog.author}</p>
      </div>
      )
})}

    </>
  )
}

export default BlogList;