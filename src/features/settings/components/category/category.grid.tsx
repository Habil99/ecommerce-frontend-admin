import { Category } from "@/features/settings/types/category.type";
import {
  GridColDef,
  GridRenderCellParams,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import { useMemo } from "react";
import { StyledDataGrid } from "@/features/settings/components/category/category.styled";
import { CrudActions } from "@/types/common.type";
import { ActionMenu } from "@/components";

type CategoryGridProps = CrudActions & {
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
        renderCell: (params: GridRenderCellParams) => (
          <ActionMenu
            editAction={editAction}
            deleteAction={deleteAction}
            id={+params.id}
          />
        ),
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
