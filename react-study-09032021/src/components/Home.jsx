import BlogList from "./BlogList";
import useFetchCustomHook from "./useFetchCustomHook";

const Home = () => {
  const {data, error, loading, setData} = useFetchCustomHook('http://localhost:8000/blogs');

  // delete feature
  const deleteFeatureFunction = (targetedId) => {
    console.log("Deleting...");
    setData(data.filter(filteredBlogs => {
      return filteredBlogs.id !== targetedId;
    }))
  }

  return (
    <>
      {data && <BlogList blogProps={data} deleteFeatureProp={deleteFeatureFunction} />}
      {error && <h1>{error}</h1>}
      {loading && <h1>Loading...</h1>}
    </>
  );
}

export default Home;