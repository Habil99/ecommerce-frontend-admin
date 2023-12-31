import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/lib";
import {
  ConfirmEmailRequest,
  SignInRequest,
  SignUpRequest,
} from "@/features/authentication/types/request.type";
import {
  ConfirmEmailResponse,
  SignInResponse,
  SignUpResponse,
} from "@/features/authentication/types/response.type";
import { HttpRequest } from "@/lib/constants";

export const authenticationService = createApi({
  reducerPath: "authenticationService",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    signUp: builder.mutation<SignUpResponse, SignUpRequest>({
      query: ({ email, password, firstName, lastName }) => ({
        url: "/auth/sign-up",
        method: HttpRequest.POST,
        data: { email, password, firstName, lastName },
      }),
    }),
    signIn: builder.mutation<SignInResponse, SignInRequest>({
      query: ({ email, password }) => ({
        url: "/auth/sign-in",
        method: HttpRequest.POST,
        data: { email, password },
      }),
    }),
    confirmEmail: builder.mutation<ConfirmEmailResponse, ConfirmEmailRequest>({
      query: ({ otpCode, emailToken }) => ({
        url: "/auth/confirm-email",
        method: HttpRequest.POST,
        data: { otpCode, emailToken },
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation, useConfirmEmailMutation } =
  authenticationService;
