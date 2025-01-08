import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

type HttpMethod = "get" | "post";

interface Params {
  url: string;
  params: string;
  method: HttpMethod;
  config?: AxiosRequestConfig;
}

export const useAxios = ({ url, params, method, config }: Params) => {
  const [data, setData] = useState<null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (method === "get") {
          await axios.get(url, config).then((res) => setData(res.data));
        } else if (method === "post") {
          await axios.post(url, params, config).then((res) => setData(res.data));
        } else {
          throw new Error("Unsupported HTTP method");
        }
      } catch (err) {
        setError(err as Error);
      }
    };

    fetchData();
  }, [url, method, params, config]);

  return { data, error };
};
