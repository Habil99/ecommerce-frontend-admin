import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { Clear, Close, DoneAll } from "@mui/icons-material";
import { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import { valueIsString } from "@/lib";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Nullable } from "@/types";
import { LoadingButton } from "@/components";
import { Color } from "@/features/settings/types/color.type";
import {
  useCreateColorMutation,
  useUpdateColorMutation,
} from "@/features/settings/services/color.service";

type ColorFormProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  initialValues: Nullable<Color>;
};

const validationSchema = Yup.object({
  name: Yup.string().min(3).trim(),
  value: Yup.string()
    .min(3)
    .trim()
    .matches(/^#[0-9A-F]{6}$/i),
});

export const ColorForm = ({
  isOpen,
  setIsOpen,
  initialValues,
}: ColorFormProps) => {
  const [
    createColor,
    {
      isLoading: isCreateLoading,
      isError: isCreateError,
      error: createError,
      reset: resetCreate,
    },
  ] = useCreateColorMutation();

  const [
    updateColor,
    {
      isLoading: isUpdateLoading,
      isError: isUpdateError,
      error: updateError,
      reset: resetUpdate,
    },
  ] = useUpdateColorMutation();

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

  const formik = useFormik<Pick<Color, "name" | "value">>({
    initialValues: {
      name: "",
      value: "",
    },
    validationSchema,
    validateOnBlur: true,
    onSubmit: (values, formikHelpers) => {
      return (
        initialValues
          ? updateColor({
              id: initialValues.id,
              name: values.name,
              value: values.value,
            })
          : createColor(values)
      )
        .unwrap()
        .then(() => setIsOpen(false))
        .catch((error) => {
          formikHelpers.setErrors({
            name: error.message?.name?.[0],
            value: error.message?.value?.[0],
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
        name: initialValues.name,
        value: initialValues.value,
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
          <TextField
            id="color-name"
            label="Name"
            fullWidth
            required
            placeholder="Enter"
            {...formik.getFieldProps("name")}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            id="color-value"
            label="Color"
            fullWidth
            required
            type="color"
            placeholder="Choose"
            {...formik.getFieldProps("value")}
            error={formik.touched.value && Boolean(formik.errors.value)}
            helperText={formik.touched.value && formik.errors.value}
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
