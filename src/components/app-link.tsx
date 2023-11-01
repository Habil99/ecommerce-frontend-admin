import { Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import React, { FC, PropsWithChildren } from "react";

type AppLinkProps = React.ComponentProps<typeof MuiLink> & {
  to: string;
};

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
  return (
    <MuiLink {...props} component={Link}>
      {props.children}
    </MuiLink>
  );
};
