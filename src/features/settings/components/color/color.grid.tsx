import { CrudActions } from "@/types/common.type";
import {
  GridColDef,
  GridRenderCellParams,
  GridRowSelectionModel,
} from "@mui/x-data-grid";
import { Color } from "@/features/settings/types/color.type";
import { AppDataGrid } from "@/components";
import { useMemo } from "react";
import { Box } from "@mui/material";

type ColorGridProps = CrudActions & {
  rows: Color[] | undefined;
  isLoading: boolean;
  rowSelectionModel: GridRowSelectionModel;
  onRowSelectionModelChange: (
    newRowSelectionModel: GridRowSelectionModel
  ) => void;
};

export const ColorGrid = ({
  rows,
  rowSelectionModel,
  isLoading,
  onRowSelectionModelChange,
  editAction,
  deleteAction,
}: ColorGridProps) => {
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
        width: 200,
      },
      {
        field: "value",
        headerName: "Color",
        flex: 1,
        renderCell: (params: GridRenderCellParams) => (
          <Box
            sx={{
              backgroundColor: params.value,
              borderRadius: "50%",
            }}
            width={20}
            height={20}
          />
        ),
      },
    ],
    [editAction, deleteAction]
  );

  return (
    <AppDataGrid
      columns={columns}
      rows={rows}
      isLoading={isLoading}
      rowSelectionModel={rowSelectionModel}
      onRowSelectionModelChange={onRowSelectionModelChange}
    />
  );
};
