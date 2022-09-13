import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url, isCovidData) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source();

    async function fetchData() {
      try {
        let res = await axios.get(url, {
          cancelToken: ourRequest.token,
        });
        let data = res && res.data ? res.data : []; //true, false
        if (data && data.length > 0 && isCovidData === true) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
          data = data.reverse();
        }
        setData(data);
        setIsLoading(false);
        setIsError(false);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("request canceled", err.message);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      }
    }
    fetchData();

    return () => {
      ourRequest.cancel("canceled by the user.");
    };
  }, [url]);
  return { data, isLoading, isError };
};
export default useFetch;
