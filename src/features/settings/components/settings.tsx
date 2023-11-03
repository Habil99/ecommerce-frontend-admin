import { Box, Paper, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { PageHeader } from "@/components";

const Settings = () => {
  const theme = useTheme();

  return (
    <Box>
      <PageHeader title="Settings" />
      <Box ml={theme.spacing(-2)}>
        <Paper
          sx={{ p: 4, border: `1px solid ${theme.palette.border?.main}` }}
          elevation={6}
        >
          <Outlet />
        </Paper>
      </Box>
    </Box>
  );
};

export default Settings;
