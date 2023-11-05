import { Box, Tooltip, Typography } from "@mui/material";

const SignUpSuccess = () => {
  return (
    <Box textAlign="center">
      <Typography>Thanks for signing up!</Typography>
      <Typography>
        We sent you an email with a confirmation link. Please click on it to
        verify your account.
      </Typography>
      <Typography>
        If you did not receive any email, please{" "}
        <Typography component="span" color="primary">
          <Tooltip title={"It is not implemented yet"}>
            <span>click here</span>
          </Tooltip>
        </Typography>{" "}
        to resend the confirmation email.
      </Typography>
    </Box>
  );
};

export default SignUpSuccess;
