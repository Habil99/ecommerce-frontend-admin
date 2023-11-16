import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  getUser,
  setIsAuthenticated,
  setTokens,
  setUser,
  useAppDispatch,
  useAppShallowEqualSelector,
} from "@/store";
import { User } from "@/types";
import { stringAvatar } from "@/lib";
import {
  Fragment,
  MouseEvent,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { DarkMode, LightMode, Logout, Settings } from "@mui/icons-material";
import {
  listItemIconStyles,
  listItemStyles,
  StyledAppBar,
} from "@/components/header/header.styled";
import { HeaderProps } from "@/components/header/header.type";
import { useNavigate } from "react-router-dom";
import { AppThemeContext } from "@/features/theme";

export const Header = ({ toggleSidebar, sidebarIsOpen }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppShallowEqualSelector(getUser) as User;

  const { mode, toggleMode } = useContext(AppThemeContext);

  const [menuAnchorElement, setMenuAnchorElement] =
    useState<HTMLElement | null>(null);

  const menuIsOpen = useMemo(
    () => Boolean(menuAnchorElement),
    [menuAnchorElement]
  );

  const handleMenuOpen = useCallback(
    (e: MouseEvent<HTMLElement>) => setMenuAnchorElement(e.currentTarget),
    []
  );

  const handleMenuClose = useCallback(() => setMenuAnchorElement(null), []);

  const signOut = useCallback(() => {
    dispatch(setUser(null));
    dispatch(setTokens(null));
    dispatch(setIsAuthenticated(false));

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    navigate("/auth/sign-in");
  }, []);

  return (
    <Fragment>
      <StyledAppBar
        position="fixed"
        elevation={0}
        sidebarIsOpen={sidebarIsOpen}
      >
        <Toolbar>
          <IconButton onClick={() => toggleSidebar()}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton sx={{ mr: 2 }} onClick={() => toggleMode()}>
            {mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>
          <IconButton onClick={handleMenuOpen}>
            <Avatar {...stringAvatar(user.firstName + " " + user.lastName)} />
          </IconButton>
        </Toolbar>
      </StyledAppBar>
      <Menu
        open={menuIsOpen}
        anchorEl={menuAnchorElement}
        id="profile-menu"
        slotProps={{
          paper: {
            sx: {
              minWidth: 220,
            },
          },
        }}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <ListItemIcon sx={listItemStyles}>
            <Avatar
              sx={{
                ...listItemIconStyles,
                width: "auto",
              }}
            />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem>
          <ListItemIcon sx={listItemStyles}>
            <Settings sx={listItemIconStyles} />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={() => signOut()}>
          <ListItemIcon sx={listItemStyles}>
            <Logout sx={listItemIconStyles} />
          </ListItemIcon>
          Log out
        </MenuItem>
      </Menu>
    </Fragment>
  );
};
