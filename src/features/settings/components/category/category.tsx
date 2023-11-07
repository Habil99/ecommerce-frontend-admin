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
import { Fragment, useCallback, useEffect, useState } from "react";
import { Delete } from "@mui/icons-material";
import { fadeMixin } from "@/lib";
import { CategoryGrid } from "@/features/settings/components/category/category.grid";
import { Category as CategoryType } from "@/features/settings/types/category.type";
import { CategoryForm } from "@/features/settings/components/category/category-form";
import { Nullable } from "@/types";
import { useSettingOutlet } from "@/features/settings/hooks/use-settings-outlet";

const Category = () => {
  const theme = useTheme();
  const { setBreadcrumbLinks } = useSettingOutlet();

  const { data, isLoading: isFetchLoading } = useFindAllCategoriesQuery();
  const [deleteCategory, { isLoading: isDeleteLoading }] =
    useDeleteCategoryMutation();

  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);

  const [categoryInitialValues, setCategoryInitialValues] =
    useState<Nullable<CategoryType>>(null);

  // TODO: implement bulk delete
  const handleDeleteCategory = useCallback(() => {
    deleteCategory(+rowSelectionModel[0]);
  }, [rowSelectionModel]);

  const editCategory = useCallback(
    (categoryId: number) => {
      const category = data?.find((item) => item.id === categoryId);
      if (category) {
        setCategoryInitialValues(category);
        setDialogIsOpen(true);
      }
    },
    [data]
  );

  useEffect(() => {
    if (!data) {
      setCategories([]);
    } else {
      setCategories(data.filter((item) => !item.parentId));
    }
  }, [data]);

  useEffect(() => {
    if (!dialogIsOpen) {
      setCategoryInitialValues(null);
    }
  }, [dialogIsOpen]);

  useEffect(() => {
    setBreadcrumbLinks([
      {
        title: "Categories",
        path: "/settings/categories",
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
              sx={fadeMixin(rowSelectionModel.length > 0, theme)}
              onClick={() => handleDeleteCategory()}
            >
              <Delete />
            </IconButton>
          </Tooltip>
          <Button variant="contained" onClick={() => setDialogIsOpen(true)}>
            Add
          </Button>
        </Stack>
        <CategoryGrid
          rows={data}
          rowSelectionModel={rowSelectionModel}
          isLoading={isFetchLoading || isDeleteLoading}
          onRowSelectionModelChange={(newRowSelectionModel) =>
            setRowSelectionModel(newRowSelectionModel)
          }
          editAction={editCategory}
          deleteAction={deleteCategory}
        />
      </Box>
      <CategoryForm
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        categories={categories}
        initialValues={categoryInitialValues}
      />
    </Fragment>
  );
};

export default Category;
