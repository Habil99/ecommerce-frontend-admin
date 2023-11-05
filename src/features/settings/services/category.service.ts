import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/lib";
import { Category } from "@/features/settings/types/category.type";
import { HttpRequest } from "@/lib/constants";

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
        method: HttpRequest.DELETE,
      }),
      invalidatesTags: ["categories"],
    }),
    createCategory: builder.mutation<
      Category,
      Pick<Category, "name" | "parentId">
    >({
      query: ({ name, parentId }) => ({
        url: "/categories",
        method: HttpRequest.POST,
        data: { name, parentId },
      }),
      invalidatesTags: ["categories"],
    }),
    updateCategory: builder.mutation<
      Category,
      Pick<Category, "id" | "name" | "parentId">
    >({
      query: ({ id, name, parentId }) => ({
        url: `/categories/${id}`,
        method: HttpRequest.PATCH,
        data: { name, parentId },
      }),
      invalidatesTags: ["categories"],
    }),
  }),
});

export const {
  useFindAllCategoriesQuery,
  useDeleteCategoryMutation,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} = categoryService;
