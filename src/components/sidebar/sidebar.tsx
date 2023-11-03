import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { Logo } from "@/components";
import { StyledDrawer } from "@/components/sidebar/sidebar.styled";
import { SidebarProps } from "@/components/sidebar/sidebar.type";
import { sidebarData } from "@/components/sidebar/constants";
import { Link } from "react-router-dom";

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
              component={Link}
              to={item.link}
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
