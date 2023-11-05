import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import { uuid } from "@/lib";
import { Fragment, useContext } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { AppThemeContext } from "@/features/theme";
import { CrudActions } from "@/types/common.type";

type ActionMenuProps = CrudActions & {
  id: number;
};

export const ActionMenu = ({
  id,
  editAction,
  deleteAction,
}: ActionMenuProps) => {
  const { mode } = useContext(AppThemeContext);

  return (
    <PopupState popupId={uuid()} variant="popover">
      {(popupState) => (
        <Fragment>
          <Button
            {...bindTrigger(popupState)}
            sx={{ color: mode === "dark" ? "white" : "light" }}
          >
            <MoreVert />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={() => {
                popupState.close();
                editAction(id);
              }}
            >
              Edit
            </MenuItem>
            <MenuItem
              onClick={() => {
                popupState.close();
                deleteAction(id);
              }}
              sx={{
                color: "red !important",
              }}
            >
              Delete
            </MenuItem>
          </Menu>
        </Fragment>
      )}
    </PopupState>
  );
};
