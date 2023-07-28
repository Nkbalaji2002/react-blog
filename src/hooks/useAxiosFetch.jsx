import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url) => {
      setIsLoading(true);

      try {
        const response = await axios.get(url, {
          cancelToken: source.token,
        });

        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (error) {
        if (!isMounted) {
          setData([]);
          setFetchError(error.message);
        }
      } finally {
        isMounted &&
          setTimeout(() => {
            return setIsLoading(false);
          }, 3000);
      }
    };

    fetchData(dataUrl);

    const cleanUp = () => {
      (isMounted = false), source.cancel();
    };

    return cleanUp;
  }, [dataUrl]);

  return {
    data,
    fetchError,
    isLoading,
  };
};

export default useAxiosFetch;
