import { FC, PropsWithChildren, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  getIsAuthenticated,
  getUser,
  setIsAuthenticated,
  setTokens,
  setUser,
  useAppDispatch,
  useAppSelector,
} from "@/store";
import { useLazyGetCurrentUserQuery } from "@/services";
import { LoadingScreen } from "@/components";

export const Content: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector(getUser);
  const isAuthenticated = useAppSelector(getIsAuthenticated);

  const [getCurrentUser, { isLoading, isError }] = useLazyGetCurrentUserQuery();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    getCurrentUser()
      .unwrap()
      .then((user) => {
        if (user.isConfirmed && user.isActive) {
          dispatch(setUser(user));
          dispatch(setIsAuthenticated(!!accessToken));
          if (accessToken && refreshToken) {
            dispatch(setTokens({ accessToken, refreshToken }));
          }
        }

        if (!user.isConfirmed) {
          navigate("/auth/confirm-email");
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

  if (isAuthenticated && user) {
    return children;
  }

  return <LoadingScreen />;
};
