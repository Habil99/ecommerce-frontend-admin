import { Navigate, Outlet } from "react-router-dom";
import { alpha, Box, Paper, styled } from "@mui/material";
import { StandardCSSProperties } from "@mui/system";
import { getIsAuthenticated, useAppSelector } from "@/store";
import { shallowEqual } from "react-redux";
import { Logo } from "@/components";

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
  const isAuthenticated = useAppSelector(getIsAuthenticated, shallowEqual);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <StyledAuthenticationContainer>
      <StyledAuthenticationBox>
        <Box mb={4} display="flex" justifyContent="center">
          <Logo />
        </Box>
        <Outlet />
      </StyledAuthenticationBox>
    </StyledAuthenticationContainer>
  );
};

export default Authentication;
