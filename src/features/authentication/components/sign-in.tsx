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
import { useSignIn } from "@/features/authentication/hooks/use-sign-in.ts";

const SignIn = () => {
  const {
    handleSubmit,
    emailFieldProps,
    passwordFieldProps,
    error,
    isError,
    isLoading,
  } = useSignIn();

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Stack gap={3}>
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
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          endIcon={
            isLoading ? <CircularProgress color="primary" size={28} /> : null
          }
          disabled={isLoading}
        >
          Sign In
        </Button>
        <Typography textAlign="center" color="grey.100" fontWeight="medium">
          Don't have an account ?
          <AppLink ml={1} to="/auth/sign-up" color="primary" underline="hover">
            Sign up
          </AppLink>
        </Typography>
      </Stack>
    </form>
  );
};

export default SignIn;
