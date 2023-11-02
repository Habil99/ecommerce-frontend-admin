import { FC, PropsWithChildren, Suspense } from "react";
import { LoadingScreen } from "@/components";

export const Loadable: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense fallback={<LoadingScreen />}>{children}</Suspense>;
};
