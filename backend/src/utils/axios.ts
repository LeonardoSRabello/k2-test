import axios, { AxiosInstance } from 'axios';

export const getAxiosInstance = (): AxiosInstance =>
  axios.create({
    baseURL: process.env.OMDB_API_URL,
  });
