import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import { Link } from "react-router-dom";
import { FC, PropsWithChildren } from "react";

type AppLinkProps = MuiLinkProps & {
  to: string;
};

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
  return (
    <MuiLink {...props} component={Link}>
      {props.children}
    </MuiLink>
  );
};
