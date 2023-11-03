import { CSSObject, Drawer, styled, Theme } from "@mui/material";
import { SIDEBAR_WIDTH } from "@/lib/constants";

const openedMixin = (theme: Theme): CSSObject => ({
  width: SIDEBAR_WIDTH.OPEN,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: SIDEBAR_WIDTH.CLOSED,
  [theme.breakpoints.up("sm")]: {
    width: SIDEBAR_WIDTH.CLOSED,
  },
});

export const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: SIDEBAR_WIDTH.OPEN,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open ? openedMixin(theme) : closedMixin(theme)),

  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    borderRightWidth: 1,
    borderRightStyle: "solid",
    borderRightColor: theme.palette.border?.main,

    ...(open ? openedMixin(theme) : closedMixin(theme)),
  },

  "& .MuiListItemButton-root": {
    borderRadius: 7,
    margin: open ? "0 12px" : 0,
  },

  "& .MuiListItemText-root": {
    ...(!open && {
      transition: theme.transitions.create("opacity", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      opacity: 0,
    }),
  },

  "& .MuiList-root": {
    margin: open ? "0 12px" : 0,
  },

  ...(!open && {
    "& .MuiListItemIcon-root": {
      marginLeft: 8,
    },
  }),

  "& .MuiListItemIcon-root svg": {
    fontSize: 24,
  },
}));
