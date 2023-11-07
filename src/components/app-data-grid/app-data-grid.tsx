import { Category } from "@/features/settings/types/category.type";
import { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { StyledAppDataGrid } from "@/components/app-data-grid/app-data-grid.styled";

type AppGridProps = {
  rows: Category[];
  columns: GridColDef[];
  isLoading: boolean;
  rowSelectionModel: GridRowSelectionModel;
  onRowSelectionModelChange: (
    newRowSelectionModel: GridRowSelectionModel
  ) => void;
};

export const AppDataGrid = ({
  rows,
  rowSelectionModel,
  isLoading,
  onRowSelectionModelChange,
  columns,
}: AppGridProps) => {
  return (
    <StyledAppDataGrid
      columns={columns}
      rows={rows || []}
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
