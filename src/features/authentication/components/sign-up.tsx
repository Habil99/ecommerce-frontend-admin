import {
  Button,
  FormControl,
  InputBase,
  InputLabel,
  Stack,
} from "@mui/material";

export const SignUp = () => {
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
      <Button variant="contained" color="primary">
        Sign In
      </Button>
    </Stack>
  );
};
