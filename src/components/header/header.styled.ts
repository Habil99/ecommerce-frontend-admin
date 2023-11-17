import { AppBar, styled } from "@mui/material";
import { AppBarProps } from "@/components/header/header.type";

export const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
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
