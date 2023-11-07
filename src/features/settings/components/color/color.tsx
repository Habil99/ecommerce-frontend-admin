import { useSettingOutlet } from "@/features/settings/hooks/use-settings-outlet";
import { Box, Button, IconButton, Stack, Tooltip } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Fragment, useEffect } from "react";

const Color = () => {
  const { setBreadcrumbLinks } = useSettingOutlet();

  useEffect(() => {
    setBreadcrumbLinks([
      {
        title: "Colors",
        path: "/settings/colors",
      },
    ]);
  }, []);

  return (
    <Fragment>
      <Box>
        <Stack justifyContent="space-between" flexDirection="row">
          <Tooltip title="Delete all selected data">
            <IconButton
              color="error"
              // sx={fadeMixin(rowSelectionModel.length > 0, theme)}
              // onClick={() => handleDeleteCategory()}
            >
              <Delete />
            </IconButton>
          </Tooltip>
          <Button
            variant="contained"
            // onClick={() => setDialogIsOpen(true)}
          >
            Add
          </Button>
        </Stack>
      </Box>
    </Fragment>
  );
};

export default Color;
