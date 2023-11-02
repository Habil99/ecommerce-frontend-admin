import {
  AppBar,
  AppBarProps as MuiAppProps,
  Avatar,
  Box,
  IconButton,
  styled,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SIDEBAR_WIDTH } from "@/lib/constants.ts";
import { stringAvatar } from "@/lib";
import { getUser, useAppSelector } from "@/store";
import { User } from "@/types";

type HeaderProps = {
  toggleSidebar: (open?: boolean) => void;
  sidebarIsOpen: boolean;
};

interface AppBarProps extends MuiAppProps {
  sidebarIsOpen: boolean;
}

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "sidebarIsOpen",
})<AppBarProps>(({ theme, sidebarIsOpen }) => ({
  width: `calc(100% - ${
    sidebarIsOpen ? SIDEBAR_WIDTH.OPEN : SIDEBAR_WIDTH.CLOSED
  }px)`,
  marginLeft: `${sidebarIsOpen ? SIDEBAR_WIDTH.OPEN : SIDEBAR_WIDTH.CLOSED}px`,
  backgroundImage: "none",

  transition: theme.transitions.create(["width", "margin-left"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export const Header = ({ toggleSidebar, sidebarIsOpen }: HeaderProps) => {
  const user = useAppSelector(getUser) as User;

  return (
    <StyledAppBar position="fixed" elevation={0} sidebarIsOpen={sidebarIsOpen}>
      <Toolbar>
        <IconButton onClick={() => toggleSidebar()}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Avatar {...stringAvatar(user.firstName + " " + user.lastName)} />
      </Toolbar>
    </StyledAppBar>
  );
};
