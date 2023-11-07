import { useSettingOutlet } from "@/features/settings/hooks/use-settings-outlet";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  useTheme,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Fragment, useEffect, useState } from "react";
import { ColorGrid } from "@/features/settings/components/color/color.grid";
import { useFindAllColorsQuery } from "@/features/settings/services/color.service";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { fadeMixin } from "@/lib";
import { ColorForm } from "./color-form";

const Color = () => {
  const theme = useTheme();
  const { setBreadcrumbLinks } = useSettingOutlet();

  const { data: colors, isLoading: isFetchLoading } = useFindAllColorsQuery();

  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);
  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([]);

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
          <Tooltip title="Delete all selected data, not implemented yet">
            <IconButton
              color="error"
              sx={fadeMixin(rowSelectionModel.length > 0, theme)}
              disabled
              // onClick={() => handleDeleteCategory()}
            >
              <Delete />
            </IconButton>
          </Tooltip>
          <Button variant="contained" onClick={() => setDialogIsOpen(true)}>
            Add
          </Button>
        </Stack>
        <ColorGrid
          rows={colors}
          isLoading={isFetchLoading}
          rowSelectionModel={rowSelectionModel}
          onRowSelectionModelChange={(newRowSelectionModel) =>
            setRowSelectionModel(newRowSelectionModel)
          }
          editAction={() => {}}
          deleteAction={() => {}}
        />
      </Box>
      <ColorForm
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        initialValues={null}
      />
    </Fragment>
  );
};

export default Color;
