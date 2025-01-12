import axios from "axios";

export const commonAxios = axios.create({
  baseURL: "/api",
});

export const Post = (url: string, params: any) =>
  commonAxios.post(url, params).then((res) => {
    if (res !== undefined) {
      return res.data;
    }
  });
