import { Alert, Button, Stack, styled, TextField } from "@mui/material";
import { KeyboardEvent, useCallback, useRef } from "react";
import { useConfirmEmailMutation } from "@/features/authentication/services/authentication.service";
import { useNavigate, useSearchParams } from "react-router-dom";
import { valueIsString } from "@/lib";

const OtpTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    textAlign: "center",
  },
});

const ConfirmEmail = () => {
  const navigate = useNavigate();
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const otpCodeLength = 6;
  const [confirmEmail, { isLoading, error, isError }] =
    useConfirmEmailMutation();
  const [searchParams] = useSearchParams();

  const handleConfirmEmail = useCallback(() => {
    const otpCode = otpInputRefs.current
      .map((ref) => ref?.value)
      .join("")
      .trim();

    const emailToken = searchParams.get("token");

    if (otpCode.length === otpCodeLength && emailToken) {
      confirmEmail({ otpCode: +otpCode, emailToken })
        .unwrap()
        .then(() => {
          navigate("/auth/sign-in");
        });
    }
  }, [searchParams]);

  const handleOtpChange = useCallback((index: number) => {
    const nextInput = otpInputRefs.current[index + 1];
    if (nextInput) {
      nextInput.focus();
    }
  }, []);

  const preventNonIntegerValue = useCallback(
    (e: KeyboardEvent<HTMLInputElement>, index: number) => {
      const keyCode = +e.code.split("Digit")[1];
      const currentInput = otpInputRefs.current[index];
      const nextInput = otpInputRefs.current[index + 1];
      const previousInput = otpInputRefs.current[index - 1];
      const allInputsFilled = otpInputRefs.current.every((ref) => ref?.value);

      if (e.key === "ArrowLeft") {
        previousInput?.focus();
      }

      if (e.key === "ArrowRight") {
        nextInput?.focus();
      }

      if (e.key === "Enter" && allInputsFilled) {
        handleConfirmEmail();
      }

      if (e.key === "Tab") {
        e.preventDefault();
      }

      if (e.key === "Backspace" && !currentInput?.value) {
        previousInput?.focus();
      }

      if (e.key === "Backspace" && currentInput?.value) {
        currentInput.value = ""; // FIXME: when reset currentInput and back to prev input, focus always on current input
      }

      if (currentInput?.value) {
        nextInput?.focus();
      }

      if (
        keyCode < 0 ||
        keyCode > 9 ||
        otpInputRefs.current.filter((ref) => ref?.value).length ===
          otpCodeLength ||
        otpInputRefs.current[index]?.value
      ) {
        e.preventDefault();
      }
    },
    []
  );

  return (
    <Stack gap={3}>
      <Stack gap={3} direction="row">
        {Array.from({ length: otpCodeLength }).map((_, index) => (
          <OtpTextField
            key={index}
            inputProps={{
              inputMode: "numeric",
            }}
            type="number"
            inputRef={(input: HTMLInputElement) =>
              (otpInputRefs.current[index] = input)
            }
            onChange={() => handleOtpChange(index)}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
              preventNonIntegerValue(e, index)
            }
          />
        ))}
      </Stack>
      {error?.message && valueIsString(error.message) && (
        <Alert severity="error" sx={{ display: isError ? "flex" : "none" }}>
          {error?.message}
        </Alert>
      )}
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleConfirmEmail}
        disabled={isLoading}
      >
        Confirm Email
      </Button>
    </Stack>
  );
};

export default ConfirmEmail;
