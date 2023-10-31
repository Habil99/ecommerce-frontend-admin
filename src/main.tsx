import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { AppThemeProvider } from "@/features/theme";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/App.tsx";
import { Provider } from "react-redux";
import { store } from "@/store";
import {
  Authentication,
  ConfirmEmail,
  SignIn,
  SignUp,
} from "@/features/authentication";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
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
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>
);
