import {
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  useTheme,
} from "@mui/material";
import { GridRowSelectionModel } from "@mui/x-data-grid";
import {
  useDeleteCategoryMutation,
  useFindAllCategoriesQuery,
} from "@/features/settings/services/category.service";
import { useCallback, useState } from "react";
import { Delete } from "@mui/icons-material";
import { fadeMixin } from "@/lib";
import { CategoryGrid } from "@/features/settings/components/category/category.grid";

const Category = () => {
  const theme = useTheme();

  const { data, isLoading: isFetchLoading } = useFindAllCategoriesQuery();
  const [deleteCategory, { isLoading: isDeleteLoading }] =
    useDeleteCategoryMutation();

  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([]);

  // TODO: implement bulk delete
  const handleDeleteCategory = useCallback(() => {
    deleteCategory(+rowSelectionModel[0]);
  }, [rowSelectionModel]);

  return (
    <Box>
      <Stack justifyContent="space-between" flexDirection="row">
        <Tooltip title="Delete">
          <IconButton
            color="error"
            sx={fadeMixin(rowSelectionModel.length > 0, theme)}
            onClick={() => handleDeleteCategory()}
          >
            <Delete />
          </IconButton>
        </Tooltip>
        <Button variant="contained">Add</Button>
      </Stack>
      <CategoryGrid
        rows={data || []}
        rowSelectionModel={rowSelectionModel}
        isLoading={isFetchLoading || isDeleteLoading}
        onRowSelectionModelChange={(newRowSelectionModel) =>
          setRowSelectionModel(newRowSelectionModel)
        }
        editAction={() => {}}
        deleteAction={deleteCategory}
      />
    </Box>
  );
};

export default Category;
