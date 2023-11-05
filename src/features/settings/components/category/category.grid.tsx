import { Category } from "@/features/settings/types/category.type";
import {
  GridColDef,
  GridRenderCellParams,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import { ButtonGroup, IconButton } from "@mui/material";
import { Delete, EditNote } from "@mui/icons-material";
import { useMemo } from "react";
import { StyledDataGrid } from "@/features/settings/components/category/category.styled";

type CategoryGridProps = {
  editAction: (id: number) => void;
  deleteAction: (id: number) => void;
  rows: Category[];
  isLoading: boolean;
  rowSelectionModel: GridRowSelectionModel;
  onRowSelectionModelChange: (
    newRowSelectionModel: GridRowSelectionModel
  ) => void;
};

export const CategoryGrid = ({
  rows,
  rowSelectionModel,
  isLoading,
  onRowSelectionModelChange,
  editAction,
  deleteAction,
}: CategoryGridProps) => {
  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        width: 120,
      },
      {
        field: "name",
        headerName: "Name",
        minWidth: 200,
      },
      {
        field: "parentId",
        headerName: "Parent",
        minWidth: 200,
        valueGetter: (params: GridRenderCellParams) => {
          const category = rows.find(
            (category) => category.id === +params.value
          );
          return category?.name;
        },
      },
      {
        field: "slug",
        headerName: "",
        align: "right",
        flex: 1,
        renderCell: (params: GridRenderCellParams) => {
          return (
            <ButtonGroup>
              <IconButton
                color="error"
                onClick={() => deleteAction(+params.id)}
              >
                <Delete />
              </IconButton>
              <IconButton color="info" onClick={() => editAction(+params.id)}>
                <EditNote />
              </IconButton>
            </ButtonGroup>
          );
        },
      },
    ],
    [editAction, deleteAction]
  );

  return (
    <StyledDataGrid
      columns={columns}
      rows={rows}
      autoHeight
      checkboxSelection
      disableRowSelectionOnClick
      autoPageSize={false}
      pageSizeOptions={[]}
      loading={isLoading}
      rowSelectionModel={rowSelectionModel}
      onRowSelectionModelChange={onRowSelectionModelChange}
    />
  );
};
