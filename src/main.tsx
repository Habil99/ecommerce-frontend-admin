import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { AppThemeProvider } from "@/features/theme";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Toaster } from "react-hot-toast";
import { router } from "@/router.tsx";
import { Loadable } from "@/components";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <CssBaseline />
        <Loadable>
          <RouterProvider router={router} />
        </Loadable>
        <Toaster />
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>
);
