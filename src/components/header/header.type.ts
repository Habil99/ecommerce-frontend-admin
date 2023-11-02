import { AppBarProps as MuiAppProps } from "@mui/material/AppBar/AppBar";

export type AppBarProps = MuiAppProps & {
  sidebarIsOpen: boolean;
};

export type HeaderProps = {
  toggleSidebar: (open?: boolean) => void;
  sidebarIsOpen: boolean;
};
