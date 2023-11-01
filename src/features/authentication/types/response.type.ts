import { User } from "@/types";

export type SignInResponse = {
  user: User;
  accessToken: string;
  refreshToken: string;
};

export type SignUpResponse = User;

export type ConfirmEmailResponse = SignInResponse;
