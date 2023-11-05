import { Button, ButtonProps, CircularProgress } from "@mui/material";
import { PropsWithChildren } from "react";

type LoadingButtonProps = ButtonProps & {
  isLoading: boolean;
};

export const LoadingButton = ({
  children,
  isLoading,
  ...props
}: PropsWithChildren<LoadingButtonProps>) => {
  return (
    <Button
      {...props}
      endIcon={
        isLoading ? <CircularProgress size={18} /> : props.endIcon || null
      }
      disabled={isLoading || props.disabled || false}
    >
      {children}
    </Button>
  );
};
