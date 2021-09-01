import{useState, useEffect} from 'react';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
      // useEffect
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error('Oops! Something went wrong while fetching data');
          }
          return res.json()
        })
        .then(data => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch(err => {
          console.log(err.message);
          setError(err.message);
          setIsLoading(false);
        })
      }, 2000);
    }, [url]);

    return {isLoading, data, error, setData};

}

export default useFetch;