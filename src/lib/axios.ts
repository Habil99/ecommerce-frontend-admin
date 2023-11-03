import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { ApiErrorResponse } from "@/types";

const baseURL = process.env.VITE_API_URL;

const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    | ApiErrorResponse
    | {
        message: string;
      }
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosClient({
        url: baseURL + url,
        method: method || "GET",
        data,
        params,
        headers,
      });

      return result.data;
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return {
        error: error.response?.data ?? {
          message: error.message,
        },
      };
    }
  };

export { axiosClient };
