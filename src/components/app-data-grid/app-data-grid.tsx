import { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { StyledAppDataGrid } from "@/components/app-data-grid/app-data-grid.styled";

type AppGridProps<RowType> = {
  rows: RowType[] | undefined;
  columns: GridColDef[];
  isLoading: boolean;
  rowSelectionModel: GridRowSelectionModel;
  onRowSelectionModelChange: (
    newRowSelectionModel: GridRowSelectionModel
  ) => void;
};

export const AppDataGrid = <
  RowType extends Record<string, RowType[keyof RowType]>,
>({
  rows,
  rowSelectionModel,
  isLoading,
  onRowSelectionModelChange,
  columns,
}: AppGridProps<RowType>) => {
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
