import { Box, Paper, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { PageHeader } from "@/components";
import { AppBreadcrumb } from "@/components/app-breadcrumb/app-breadcrumb";
import { useState } from "react";
import { BreadcrumbLink } from "@/components/app-breadcrumb/app-breadcrumb.type";
import { SettingOutletContext } from "@/features/settings/types/setting.type";

const Settings = () => {
  const theme = useTheme();
  const [breadcrumbLinks, setBreadcrumbLinks] = useState<BreadcrumbLink[]>([]);

  return (
    <Box>
      <PageHeader title="Settings">
        <AppBreadcrumb links={breadcrumbLinks} />
      </PageHeader>
      <Box ml={theme.spacing(-2)}>
        <Paper
          sx={{ p: 4, border: `1px solid ${theme.palette.border?.main}` }}
          elevation={6}
        >
          <Outlet
            context={{ setBreadcrumbLinks } satisfies SettingOutletContext}
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default Settings;
