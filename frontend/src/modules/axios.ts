import axios, { AxiosInstance, RawAxiosRequestHeaders } from "axios";

export const getAxiosInstance = ({
  headers,
}: {
  headers?: RawAxiosRequestHeaders;
}): AxiosInstance =>
  axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: headers,
  });
