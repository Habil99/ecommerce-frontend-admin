import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/lib";
import { Color } from "@/features/settings/types/color.type";
import { HttpRequest } from "@/lib/constants";

export const colorService = createApi({
  reducerPath: "color-service",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["colors"],
  endpoints: (builder) => ({
    findAllColors: builder.query<Color[], void>({
      query: () => ({
        url: "/settings/colors",
      }),
      providesTags: ["colors"],
    }),
    createColor: builder.mutation<Color, Pick<Color, "name" | "value">>({
      query: ({ name, value }) => ({
        url: "/settings/colors",
        method: HttpRequest.POST,
        data: { name, value },
      }),
      invalidatesTags: ["colors"],
    }),
    updateColor: builder.mutation<Color, Pick<Color, "id" | "name" | "value">>({
      query: ({ id, name, value }) => ({
        url: `/settings/colors/${id}`,
        method: HttpRequest.POST,
        data: { name, value },
      }),
      invalidatesTags: ["colors"],
    }),
  }),
});

export const {
  useFindAllColorsQuery,
  useCreateColorMutation,
  useUpdateColorMutation,
} = colorService;
