import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import { withLoadable } from "@/components";

const Settings = withLoadable(lazy(() => import("./components/settings")));
const Colors = withLoadable(lazy(() => import("./components/color/color")));
const Sizes = withLoadable(lazy(() => import("./components/size/size")));
const Categories = withLoadable(
  lazy(() => import("./components/category/category"))
);

export const settingsRoute: RouteObject = {
  path: "/settings",
  element: <Settings />,
  children: [
    {
      path: "colors",
      element: <Colors />,
    },
    {
      path: "sizes",
      element: <Sizes />,
    },
    {
      path: "categories",
      element: <Categories />,
    },
  ],
};
