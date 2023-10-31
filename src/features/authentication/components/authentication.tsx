import { Outlet } from "react-router-dom";
import { alpha, Box, Container, Paper, styled, useTheme } from "@mui/material";
import { StandardCSSProperties } from "@mui/system";
import darkLogo from "@/assets/dark-logo.svg";
import lightLogo from "@/assets/light-logo.svg";

const StyledAuthenticationContainer = styled(Container)(
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

export const Authentication = () => {
  const {
    palette: { mode },
  } = useTheme();

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
