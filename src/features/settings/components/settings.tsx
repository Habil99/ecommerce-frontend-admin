import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { PageHeader } from "@/components";

const Settings = () => {
  return (
    <Box>
      <PageHeader title="Categories" />
      <Outlet />
    </Box>
  );
};

export default Settings;
