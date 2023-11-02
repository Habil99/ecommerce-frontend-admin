import {
  Box,
  CSSObject,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  styled,
  Theme,
} from "@mui/material";
import { SIDEBAR_WIDTH } from "@/lib/constants.ts";
import { Logo } from "@/components";
import { Category, FormatSize, Palette } from "@mui/icons-material";

type SidebarProps = {
  sidebarIsOpen: boolean;
  toggleSidebar: (open?: boolean) => void;
};

const sidebarData = [
  {
    title: "Colors",
    icon: <Palette />,
    link: "/colors",
  },
  {
    title: "Sizes",
    icon: <FormatSize />,
    link: "/sizes",
  },
  {
    title: "Categories",
    icon: <Category />,
    link: "/categories",
  },
];

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

const StyledDrawer = styled(Drawer, {
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

    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
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

export const Sidebar = ({ sidebarIsOpen, toggleSidebar }: SidebarProps) => {
  return (
    <StyledDrawer
      open={sidebarIsOpen}
      variant="permanent"
      onClose={() => toggleSidebar(false)}
    >
      <Box
        mr={3}
        height={70}
        display="flex"
        alignItems="center"
        ml={sidebarIsOpen ? 3 : "18px"}
        overflow="hidden"
      >
        <Logo width={180} />
      </Box>
      <List
        component="nav"
        subheader={
          <ListSubheader
            sx={{
              visibility: sidebarIsOpen ? "visible" : "hidden",
            }}
          >
            Settings
          </ListSubheader>
        }
      >
        {sidebarData.map((item) => (
          <ListItem disablePadding key={item.title}>
            <ListItemButton
              sx={{
                ...(!sidebarIsOpen && {
                  background: "transparent !important",
                }),
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};
