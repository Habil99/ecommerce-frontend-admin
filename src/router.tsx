import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { authenticationRoute } from "@/features/authentication";
import { Content } from "@/components";
import { settingsRoute } from "@/features/settings";

const App = lazy(() => import("@/App"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Content>
        <App />
      </Content>
    ),
    children: [settingsRoute],
  },
  authenticationRoute,
]);
