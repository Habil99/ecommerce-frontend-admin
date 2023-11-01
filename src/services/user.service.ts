import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/lib";
import { User } from "@/types";

export const userService = createApi({
  reducerPath: "user-service",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    getCurrentUser: builder.query<User, void>({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCurrentUserQuery, useLazyGetCurrentUserQuery } =
  userService;
