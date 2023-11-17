import { Box, CircularProgress } from "@mui/material";

export const LoadingScreen = () => {
  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor={"background"}
    >
      <CircularProgress
        sx={{
          color: "info.light",
        }}
        size={72}
      />
    </Box>
  );
};
