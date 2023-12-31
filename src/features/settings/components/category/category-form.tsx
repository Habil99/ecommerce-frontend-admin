import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Clear, Close, DoneAll } from "@mui/icons-material";
import { Category } from "../../types/category.type";
import { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import { uuid, valueIsString } from "@/lib";
import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from "@/features/settings/services/category.service";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Nullable } from "@/types";
import { LoadingButton } from "@/components";

type CategoryFormProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  categories: Category[];
  initialValues: Nullable<Category>;
};

const validationSchema = Yup.object({
  parentId: Yup.number().nullable(),
  name: Yup.string().min(3).trim(),
});

export const CategoryForm = ({
  isOpen,
  setIsOpen,
  categories,
  initialValues,
}: CategoryFormProps) => {
  const [
    createCategory,
    {
      isLoading: isCreateLoading,
      isError: isCreateError,
      error: createError,
      reset: resetCreate,
    },
  ] = useCreateCategoryMutation();
  const [
    updateCategory,
    {
      isLoading: isUpdateLoading,
      isError: isUpdateError,
      error: updateError,
      reset: resetUpdate,
    },
  ] = useUpdateCategoryMutation();

  const isLoading = useMemo(
    () => isCreateLoading || isUpdateLoading,
    [isCreateLoading, isUpdateLoading]
  );
  const isError = useMemo(
    () => isCreateError || isUpdateError,
    [isCreateError, isUpdateError]
  );
  const error = useMemo(
    () => (isCreateError ? createError : isUpdateError ? updateError : null),
    [createError, isCreateError, isUpdateError, updateError]
  );

  const formik = useFormik<Pick<Category, "name" | "parentId">>({
    initialValues: {
      parentId: null,
      name: "",
    },
    validationSchema,
    validateOnBlur: true,
    onSubmit: (values, formikHelpers) => {
      return (
        initialValues
          ? updateCategory({
              id: initialValues.id,
              name: values.name,
              parentId: values.parentId,
            })
          : createCategory(values)
      )
        .unwrap()
        .then(() => setIsOpen(false))
        .catch((error) => {
          formikHelpers.setErrors({
            name: error.message?.name?.[0],
            parentId: error.message?.parentId?.[0],
          });
        });
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    formik.resetForm();
    resetCreate();
    resetUpdate();
  }, [isOpen]);

  useEffect(() => {
    if (initialValues) {
      formik.setValues({
        parentId: initialValues.parentId,
        name: initialValues.name,
      });
    }
  }, [initialValues]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle display="flex" alignItems="center" justifyContent="flex-end">
        <IconButton onClick={() => setIsOpen(false)}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stack gap={2} component="form" onSubmit={formik.handleSubmit}>
          <FormControl fullWidth>
            <InputLabel>Parent</InputLabel>
            <Select
              disabled={categories.length === 0}
              placeholder="Select"
              displayEmpty
              defaultValue=""
              {...formik.getFieldProps("parentId")}
              error={formik.touched.parentId && Boolean(formik.errors.parentId)}
              value={String(formik.values.parentId)}
            >
              <MenuItem value={undefined} key={uuid()}>
                None
              </MenuItem>
              {categories.length === 0 && (
                <MenuItem value="" key={uuid()}>
                  No data
                </MenuItem>
              )}
              {categories.map((category) => (
                <MenuItem value={category.id} key={category.slug}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText
              error={!!(formik.touched.parentId && formik.errors.parentId)}
            >
              {formik.touched.parentId && formik.errors.parentId
                ? formik.errors.parentId
                : "If you choose parent, created record will be subcategory"}
            </FormHelperText>
          </FormControl>
          <TextField
            id="category-name"
            label="Name"
            fullWidth
            required
            placeholder="Enter"
            {...formik.getFieldProps("name")}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          {error?.message && valueIsString(error.message) && (
            <Alert severity="error" sx={{ display: isError ? "flex" : "none" }}>
              {error?.message}
            </Alert>
          )}
          {/* This is hack to submit form with enter when there is only input field in form */}
          <input type="submit" hidden onSubmit={() => formik.handleSubmit()} />
        </Stack>
      </DialogContent>
      <DialogActions sx={{ pr: 3, pb: 3 }}>
        <Button
          onClick={() => setIsOpen(false)}
          disabled={isLoading}
          variant="outlined"
          endIcon={<Clear />}
        >
          Cancel
        </Button>
        <LoadingButton
          variant="contained"
          onClick={() => formik.handleSubmit()}
          isLoading={isLoading}
          endIcon={<DoneAll />}
        >
          Save
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};
