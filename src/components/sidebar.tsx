import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  styled,
} from "@mui/material";
import { useCallback, useState } from "react";
import { SIDEBAR_WIDTH } from "@/lib/constants.ts";
import { Logo } from "@/components";
import { Category, FormatSize, Palette } from "@mui/icons-material";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  bgColor: theme.palette.primary.main,

  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: SIDEBAR_WIDTH,
    borderRightWidth: 1,
    borderRightStyle: "solid",
    borderRightColor: theme.palette.border?.main,
  },

  "& .MuiListItemButton-root": {
    borderRadius: 7,
    margin: "0 12px",

    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },

  "& .MuiList-root": {
    margin: "0 12px",
  },

  "& .MuiListItemIcon-root svg": {
    fontSize: 24,
  },
}));

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleDrawer = useCallback((open?: boolean) => {
    if (open !== undefined) {
      setIsOpen(open);
    } else {
      setIsOpen((prevState) => !prevState);
    }
  }, []);

  return (
    <StyledDrawer
      open={isOpen}
      variant="permanent"
      onClose={() => toggleDrawer(false)}
    >
      <Box mx={3} height={70} display="flex" alignItems="center">
        <Logo width={180} />
      </Box>
      <List
        component="nav"
        aria-labelled-by="nest-nav-subheader"
        subheader={<ListSubheader>Settings</ListSubheader>}
      >
        <ListItemButton>
          <ListItemIcon>
            <Palette />
          </ListItemIcon>
          <ListItemText primary="Colors" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <FormatSize />
          </ListItemIcon>
          <ListItemText primary="Sizes" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Category />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItemButton>
      </List>
    </StyledDrawer>
  );
};
