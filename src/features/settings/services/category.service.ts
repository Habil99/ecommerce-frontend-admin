import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/lib";
import { Category } from "@/features/settings/types/category.type";

export const categoryService = createApi({
  reducerPath: "category-service",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["categories"],
  endpoints: (builder) => ({
    findAllCategories: builder.query<Category[], void>({
      query: () => ({ url: "/categories" }),
      providesTags: ["categories"],
    }),
    deleteCategory: builder.mutation<Category, number>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["categories"],
    }),
  }),
});

export const { useFindAllCategoriesQuery, useDeleteCategoryMutation } =
  categoryService;
