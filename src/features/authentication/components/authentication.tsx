import { Navigate, Outlet } from "react-router-dom";
import { alpha, Box, Paper, styled } from "@mui/material";
import { StandardCSSProperties } from "@mui/system";
import darkLogo from "@/assets/dark-logo.svg";
import lightLogo from "@/assets/light-logo.svg";
import { useContext } from "react";
import { AppThemeContext } from "@/features/theme";
import { getIsAuthenticated, useAppSelector } from "@/store";
import { shallowEqual } from "react-redux";

const StyledAuthenticationContainer = styled(Box)(
  ({ theme }): Partial<StandardCSSProperties> => ({
    width: "100%",
    minHeight: "100vh",
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    backgroundImage: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })
);

const StyledAuthenticationBox = styled(Paper)(
  ({ theme }): Partial<StandardCSSProperties> => ({
    backgroundColor: theme.palette.background.primary,
    backgroundImage: "none",
    borderRadius: 7,
    padding: 32,
    maxWidth: 480,
    width: "100%",
  })
);

const Authentication = () => {
  const { mode } = useContext(AppThemeContext);
  const isAuthenticated = useAppSelector(getIsAuthenticated, shallowEqual);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <StyledAuthenticationContainer>
      <StyledAuthenticationBox>
        <Box mb={4} display="flex" justifyContent="center">
          <img src={mode === "light" ? darkLogo : lightLogo} alt="logo" />
        </Box>
        <Outlet />
      </StyledAuthenticationBox>
    </StyledAuthenticationContainer>
  );
};

export default Authentication;
