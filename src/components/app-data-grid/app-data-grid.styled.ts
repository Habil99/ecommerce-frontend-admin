import { styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const StyledAppDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,

  "& .MuiDataGrid-withBorderColor": {
    borderColor: theme.palette.border?.main,
  },

  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    border: "none",
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
  },

  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },
}));
