import { useEffect, useMemo } from "react";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useSignUpMutation } from "@/features/authentication/services/authentication.service";
import { SignUpRequest } from "@/features/authentication/types/request.type";
import { valueIsString } from "@/lib";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useSignUp = () => {
  const navigate = useNavigate();

  const signUpSchema = useMemo(
    () =>
      object({
        email: string().email().notRequired(),
        password: string().min(8).notRequired(),
        firstName: string().min(3).max(30).notRequired(),
        lastName: string().min(3).max(30).notRequired(),
      }),
    []
  );

  const [signUp, { error, isError, isLoading }] = useSignUpMutation();

  const formik = useFormik<SignUpRequest>({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values: SignUpRequest) =>
      signUp(values)
        .unwrap()
        .then((user) => {
          toast.success("You have successfully signed up");
          navigate("/auth/confirm-email", {
            state: { email: user.email },
          });
        }),
    enableReinitialize: true,
  });

  useEffect(() => {
    if (isError && error?.message && !valueIsString(error.message)) {
      formik.setErrors({
        email: error?.message.email?.[0],
        password: error?.message.password?.[0],
        firstName: error?.message.firstName?.[0],
        lastName: error?.message.lastName?.[0],
      });
    }
  }, [isError]);

  const getFieldsPropsByName = (name: keyof SignUpRequest) => {
    const fieldsProps = formik.getFieldProps(name);

    return Object.assign(fieldsProps, {
      error: formik.touched[name] && Boolean(formik.errors[name]),
      helperText: formik.touched[name] && formik.errors[name],
    });
  };

  return {
    formik,
    emailFieldProps: getFieldsPropsByName("email"),
    passwordFieldProps: getFieldsPropsByName("password"),
    firstNameFieldProps: getFieldsPropsByName("firstName"),
    lastNameFieldProps: getFieldsPropsByName("lastName"),
    handleSubmit: formik.handleSubmit,
    error,
    isError,
    isLoading,
  };
};
