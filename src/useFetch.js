import { useState, useEffect } from 'react';

/**
 * The useFetch function fetches the data with a url parameter. With the useState hook it updates the values of the data.
 * the useEffect hook inside useFetch is handling the stages when fetching the data while loading and if there is any errors.
 * The abortcontroller method is used if the function catches any error and aborts the fetch.
 * @param {url} url uses the url adress as a parameter
 * @returns returns objects with the values that is set in the function so that you can reuse this useFetch component 
 * in other components
 */
const useFetch = (url) => {
     const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

     useEffect(() => {

        const abortCon = new AbortController();

      fetch(url, { signal: abortCon.signal })
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data');
        }
         return res.json();
      })
      .then(data => {
          setData(data);
          setLoading(false);
      })
      .catch(err => {
          if ( err.name === 'Aborterror' ) {
              console.log('fetch aborted');
          }
          else {
        console.log(err.message);
          }
      })

      return () => abortCon.abort();
  }, [url]);

  return { data, loading }
}

export default useFetch;