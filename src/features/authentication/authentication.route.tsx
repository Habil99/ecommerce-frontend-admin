import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { withLoadable } from "@/components/hoc/with-loadable";

const Authentication = withLoadable(
  lazy(() => import("./components/authentication"))
);
const SignIn = withLoadable(lazy(() => import("./components/sign-in")));
const SignUp = withLoadable(lazy(() => import("./components/sign-up")));
const SignUpSuccess = withLoadable(
  lazy(() => import("./components/sign-up-success"))
);
const ConfirmEmail = withLoadable(
  lazy(() => import("./components/confirm-email"))
);

export const authenticationRoute: RouteObject = {
  path: "auth",
  element: <Authentication />,
  children: [
    {
      path: "sign-in",
      element: <SignIn />,
    },
    {
      path: "sign-up",
      element: <SignUp />,
    },
    {
      path: "sign-up-success",
      element: <SignUpSuccess />,
    },
    {
      path: "confirm-email",
      element: <ConfirmEmail />,
    },
  ],
};
