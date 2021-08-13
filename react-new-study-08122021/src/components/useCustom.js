import { useState, useEffect } from 'react';

const useCustom = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  // useEffect
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error('Oops, something went wrong while fetching data!')
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setIsLoading(false);
        })
        .catch(err => {
          setIsError(err.message);
          setIsLoading(false);
        })
    }, 1000);
  }, [url]);

  return { data, isLoading, isError };
}

export default useCustom;