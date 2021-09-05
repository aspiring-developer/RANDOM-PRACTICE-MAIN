import { useState, useEffect } from 'react';

const useFetchCustomHook = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error('Oops! Something went wrong!!')
          }
          return res.json()
        })
        .then(data => {
          setData(data);
          setLoading(false);
        })
        .catch(err => {
          console.log(err.message);
          setError(err.message);
          setLoading(false);
        })

    }, 2000);
  }, [url])

  return { data, error, loading, setData }
}

export default useFetchCustomHook;