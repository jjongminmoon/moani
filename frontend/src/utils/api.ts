import axios from "axios";

export const commonAxios = axios.create({
  baseURL: "/api",
});

export const Get = async (url: string) => {
  try {
    const res = await commonAxios.get(url);

    if (res !== undefined) {
      return res.data;
    }
  } catch (err) {
    throw new Error(`데이터를 가져오는 데 실패했습니다.\n${err}`);
  }
};

export const Post = async (url: string, params: any) =>
  await commonAxios.post(url, params).then((res) => {
    if (res !== undefined) {
      return res.data;
    }
  });
