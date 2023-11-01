import {
  Alert,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AppLink } from "@/components";
import { valueIsString } from "@/lib";
import { useSignUp } from "@/features/authentication/hooks/use-sign-up.ts";

const SignUp = () => {
  const {
    handleSubmit,
    emailFieldProps,
    passwordFieldProps,
    firstNameFieldProps,
    lastNameFieldProps,
    error,
    isError,
    isLoading,
  } = useSignUp();

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Stack gap={3}>
        <TextField
          fullWidth
          label="First name"
          id="firstName"
          type="firstName"
          {...firstNameFieldProps}
        />
        <TextField
          fullWidth
          label="Last name"
          id="lastName"
          type="lastName"
          {...lastNameFieldProps}
        />
        <TextField
          fullWidth
          label="Email"
          id="email"
          type="email"
          {...emailFieldProps}
        />
        <TextField
          fullWidth
          label="Password"
          id="password"
          type="password"
          {...passwordFieldProps}
        />
        {error?.message && valueIsString(error.message) && (
          <Alert severity="error" sx={{ display: isError ? "flex" : "none" }}>
            {error?.message}
          </Alert>
        )}
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          endIcon={
            isLoading ? <CircularProgress color="primary" size={28} /> : null
          }
          disabled={isLoading}
        >
          Sign Up
        </Button>
        <Typography textAlign="center" color="grey.100" fontWeight="medium">
          Already have an account ?
          <AppLink ml={1} to="/auth/sign-in" color="primary" underline="hover">
            Sign in
          </AppLink>
        </Typography>
      </Stack>
    </form>
  );
};

export default SignUp;
