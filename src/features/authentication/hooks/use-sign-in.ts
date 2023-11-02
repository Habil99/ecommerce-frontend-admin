import { useEffect, useMemo } from "react";
import { object, string } from "yup";
import { useFormik } from "formik";
import { useSignInMutation } from "@/features/authentication/services/authentication.service";
import { SignInRequest } from "@/features/authentication/types/request.type";
import { valueIsString } from "@/lib";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  setIsAuthenticated,
  setTokens,
  setUser,
  useAppDispatch,
} from "@/store";

export const useSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const signInSchema = useMemo(
    () =>
      object({
        email: string().email().notRequired(),
        password: string().min(8).notRequired(),
      }),
    []
  );

  const [signIn, { error, isError, isLoading }] = useSignInMutation();

  const formik = useFormik<SignInRequest>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: (values: SignInRequest) =>
      signIn(values)
        .unwrap()
        .then((response) => {
          const { user, accessToken, refreshToken } = response;

          if (!user.isConfirmed) {
            toast.error(
              "Your email is not confirmed. Please confirm your email"
            );
            return navigate("/auth/confirm-email", {
              state: { email: user.email },
            });
          }

          if (!user.isActive) {
            return toast.error("Your account is not active");
          }

          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);

          dispatch(
            setTokens({
              accessToken,
              refreshToken,
            })
          );
          dispatch(setUser(user));
          dispatch(setIsAuthenticated(true));

          navigate("/");
        }),
    enableReinitialize: true,
  });

  useEffect(() => {
    if (isError && error?.message && !valueIsString(error.message)) {
      formik.setErrors({
        email: error?.message.email?.[0],
        password: error?.message.password?.[0],
      });
    }
  }, [isError]);

  const getFieldsPropsByName = (name: keyof SignInRequest) => {
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
    handleSubmit: formik.handleSubmit,
    error,
    isError,
    isLoading,
  };
};
