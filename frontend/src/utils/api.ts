import axios from "axios";
import { useEffect, useState } from "react";

const axiosInstance = axios.create({
  baseURL: "/api",
});

export const useApi = (url: string, method: "get" | "post", params?: any) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (method === "get") {
          const response = await axiosInstance.get(url);
          setData(response);
        } else if (method === "post") {
          const response = await axiosInstance.post(url, params);
          setData(response);
        } else {
          throw new Error(`Invalid Method: ${method}`);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, params]);

  return { data, loading, error };
};
