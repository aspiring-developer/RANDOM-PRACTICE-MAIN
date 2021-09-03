import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  //const [isLoading, setIsLoading] = useState(true);
  //const [blogs, setBlogs] = useState(null);
  //const [error, setError] = useState(null);

  const { isLoading, data, error, setData } = useFetch('http://localhost:8000/blogs');

  // Delete Feature
  function deleteFeatureFunction(targetedId) {
    console.log("Deleting...");
    setData(data.filter(filteredBlogs => {
      return targetedId !== filteredBlogs.id;
    }))
  };

  //// useEffect
  //useEffect(() => {
  //  setTimeout(() => {
  //    fetch('http://localhost:8000/blogs')
  //      .then(res => {
  //        if (!res.ok) {
  //          throw Error('Oops! Something went wrong while fetching data');
  //        }
  //        return res.json()
  //      })
  //      .then(data => {
  //        setBlogs(data);
  //        setIsLoading(false);
  //        setError(null);
  //      })
  //      .catch(err => {
  //        console.log(err.message);
  //        setError(err.message);
  //        setIsLoading(false);
  //      })
  //  }, 2000);
  //}, [])

  return (
    <>
      {isLoading && <h1 color="red">Loading...</h1>}
      {error && <h1 color="red">{error}</h1>}
      {data && <BlogList blogProps={data} deleteFeatureProp={deleteFeatureFunction} />}
      {/*{data && <BlogList blogProps={data}  />}*/}
    </>
  );
}

export default Home;