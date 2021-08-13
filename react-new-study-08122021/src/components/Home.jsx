import BlogList from "./BlogList";
import useCustom from './useCustom';
const Home = () => {

  const { data, isLoading, isError } = useCustom("http://localhost:8000/blogs");


  // Delete feature
  //function deleteFunction(targetedId) {
  //  console.log("Deleting...");
  //  setData(data.filter(filteredBlogs => {
  //    return filteredBlogs.id !== targetedId;
  //  }))
  //};



  return (
    <>
      <section>
        <div className="row my-4 mainSection1Row">
          <div className="col p-5 bg-light">
            <h2 className="text-dark p-3 text-center"> Blog List  </h2>
            {isError && <h2 className="text-danger">{isError}</h2>}
            {isLoading && <h1>Loading...</h1>}
            {/*{data && <BlogList blogProp={data} deleteProp={deleteFunction} />}*/}
            {data && <BlogList blogProp={data} />}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

