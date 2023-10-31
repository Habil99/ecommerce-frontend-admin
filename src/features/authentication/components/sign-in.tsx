import {
  Button,
  FormControl,
  InputBase,
  InputLabel,
  Stack,
} from "@mui/material";

export const SignIn = () => {
  return (
    <Stack gap={3}>
      <FormControl variant={"standard"}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputBase id="email" />
      </FormControl>
      <FormControl variant={"standard"}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputBase id="password" />
      </FormControl>
      <Button variant="contained" color="primary">
        Sign In
      </Button>
    </Stack>
  );
};
