import { lazy } from "react";

const Authentication = lazy(() => import("./components/authentication"));
const SignIn = lazy(() => import("./components/sign-in"));
const SignUp = lazy(() => import("./components/sign-up"));
const ConfirmEmail = lazy(() => import("./components/confirm-email"));

export const authenticationRoute = {
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
      path: "confirm-email",
      element: <ConfirmEmail />,
    },
  ],
};
