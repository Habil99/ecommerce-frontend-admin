import { FC, PropsWithChildren, Suspense } from "react";
import { LoadingScreen } from "@/components/loading-screen.tsx";

export const Loadable: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense fallback={<LoadingScreen />}>{children}</Suspense>;
};
