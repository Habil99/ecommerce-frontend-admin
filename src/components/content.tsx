import {
  setIsAuthenticated,
  setTokens,
  setUser,
  useAppDispatch,
} from "@/store";
import { FC, PropsWithChildren, useEffect } from "react";
import { useLazyGetCurrentUserQuery } from "@/services";
import { LoadingScreen } from "@/components";
import { Navigate } from "react-router-dom";

export const Content: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [getCurrentUser, { isLoading, isError }] = useLazyGetCurrentUserQuery();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    getCurrentUser()
      .unwrap()
      .then((response) => {
        dispatch(setUser(response));
        dispatch(setIsAuthenticated(!!accessToken));
        if (accessToken && refreshToken) {
          dispatch(setTokens({ accessToken, refreshToken }));
        }
      })
      .catch(() => {
        dispatch(setIsAuthenticated(false));
      });
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <Navigate to="/auth/sign-in" />;
  }

  return children;
};
