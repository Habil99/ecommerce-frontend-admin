import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  styled,
  Tooltip,
  useTheme,
} from "@mui/material";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import {
  useDeleteCategoryMutation,
  useFindAllCategoriesQuery,
} from "@/features/settings/services/category.service";
import { useCallback, useMemo, useState } from "react";
import { Delete, EditNote } from "@mui/icons-material";
import { fadeInMixin, fadeOutMixin } from "@/lib";

const getColumns = (
  editAction: (id: number) => void,
  deleteAction: (id: number) => void
): GridColDef[] => [
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
    field: "slug",
    headerName: "",
    align: "right",
    flex: 1,
    renderCell: (params) => {
      return (
        <ButtonGroup>
          <IconButton color="error" onClick={() => deleteAction(+params.id)}>
            <Delete />
          </IconButton>
          <IconButton color="info" onClick={() => editAction(+params.id)}>
            <EditNote />
          </IconButton>
        </ButtonGroup>
      );
    },
  },
];

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
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

const Categories = () => {
  const theme = useTheme();

  const { data, isLoading: isFetchLoading } = useFindAllCategoriesQuery();
  const [deleteCategory, { isLoading: isDeleteLoading }] =
    useDeleteCategoryMutation();

  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([]);

  const columns = useMemo(
    () => getColumns(() => {}, deleteCategory),
    [deleteCategory]
  );

  const handleDeleteCategory = useCallback(() => {
    deleteCategory(+rowSelectionModel[0]);
  }, [rowSelectionModel]);

  return (
    <Box>
      <Stack justifyContent="space-between" flexDirection="row">
        <Tooltip title="Delete">
          <IconButton
            color="error"
            sx={{
              ...(rowSelectionModel.length > 0
                ? fadeInMixin(theme)
                : fadeOutMixin(theme)),
            }}
            onClick={() => handleDeleteCategory()}
          >
            <Delete />
          </IconButton>
        </Tooltip>
        <Button variant="contained">Add</Button>
      </Stack>
      <StyledDataGrid
        columns={columns}
        rows={data || []}
        autoHeight
        checkboxSelection
        disableRowSelectionOnClick
        autoPageSize={false}
        pageSizeOptions={[]}
        loading={isFetchLoading || isDeleteLoading}
        rowSelectionModel={rowSelectionModel}
        onRowSelectionModelChange={(newRowSelectionModel) =>
          setRowSelectionModel(newRowSelectionModel)
        }
      />
    </Box>
  );
};

export default Categories;
