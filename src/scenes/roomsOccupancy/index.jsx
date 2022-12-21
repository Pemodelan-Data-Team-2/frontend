import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { roomsOccupancy } from "../../data/mockDataTable";
import Header from "../../components/Header";

const RoomsOccupancy = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "room_id", headerName: "Room ID" },
    {
      field: "bed_id",
      headerName: "Bed ID",
      flex: 1,
    },
    {
        field: "care_center_id",
        headerName: "Care Center ID",
        flex: 1,
    },
    {
        field: "status",
        headerName: "Status",
        flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Current MVCH's Rooms Occupancy" subtitle={"Current date: " + new Date().toLocaleString("en-US", {dateStyle: 'medium'}) + ""} />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={roomsOccupancy} columns={columns} components={{ Toolbar: GridToolbar }}/>
      </Box>
    </Box>
  );
};

export default RoomsOccupancy;
