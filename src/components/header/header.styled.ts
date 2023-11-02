import { AppBar, styled } from "@mui/material";
import { SIDEBAR_WIDTH } from "@/lib/constants";
import { AppBarProps } from "@/components/header/header.type";

export const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "sidebarIsOpen",
})<AppBarProps>(({ theme, sidebarIsOpen }) => ({
  width: `calc(100% - ${
    sidebarIsOpen ? SIDEBAR_WIDTH.OPEN : SIDEBAR_WIDTH.CLOSED
  }px)`,
  marginLeft: `${sidebarIsOpen ? SIDEBAR_WIDTH.OPEN : SIDEBAR_WIDTH.CLOSED}px`,

  transition: theme.transitions.create(["width", "margin-left"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export const listItemStyles = {
  minWidth: 42,
};

export const listItemIconStyles = {
  background: "none",
  color: "inherit",
  fontSize: 24,

  "& > svg": {
    width: 24,
  },
};
