import { Loadable } from "@/components";
import { JSX, LazyExoticComponent } from "react";

export const withLoadable =
  (Component: LazyExoticComponent<() => JSX.Element>) =>
  (props: Record<string, unknown>) => (
    <Loadable>
      <Component {...props} />
    </Loadable>
  );
