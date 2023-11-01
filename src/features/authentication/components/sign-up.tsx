import {
  Button,
  FormControl,
  InputBase,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import { AppLink } from "@/components";

const SignUp = () => {
  return (
    <Stack gap={3}>
      <FormControl variant={"standard"}>
        <InputLabel htmlFor="first_name">First name</InputLabel>
        <InputBase id="first_name" />
      </FormControl>
      <FormControl variant={"standard"}>
        <InputLabel htmlFor="last_name">Last name</InputLabel>
        <InputBase id="last_name" />
      </FormControl>{" "}
      <FormControl variant={"standard"}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputBase id="email" />
      </FormControl>
      <FormControl variant={"standard"}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputBase id="password" />
      </FormControl>
      <Button variant="contained" color="primary" size="large">
        Sign In
      </Button>
      <Typography textAlign="center" color="grey.100" fontWeight="medium">
        Already have an account ?
        <AppLink ml={1} to="/auth/sign-in" color="primary" underline="hover">
          Sign in
        </AppLink>
      </Typography>
    </Stack>
  );
};

export default SignUp;
