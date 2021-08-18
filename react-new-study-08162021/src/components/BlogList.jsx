const BlogList = () => {
  return (
    <>
<div className="row p-2 m-1 mb-4 d-flex align-items-center border border-info rounded">
<div className="col-10">
<h4>Blog Title: </h4>
<small className="text-secondary">Author: </small>
<p>Blog Body: </p>
</div>
<div className="col-2">
  <div className="btn btn-warning">Delete</div>
</div>
</div>

    </>

   );
}

export default BlogList;