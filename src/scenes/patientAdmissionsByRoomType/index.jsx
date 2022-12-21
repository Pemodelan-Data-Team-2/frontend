import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { annualRoomOccupancyByRoomType } from "../../data/mockDataTable";
import Header from "../../components/Header";

const PatientAdmissionsByRoomType = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "year", headerName: "Year" },
    {
      field: "country",
      headerName: "Country",
      flex: 1,
    },
    {
      field: "Class I",
      headerName: "Class I",
      type: 'number',
      flex: 1,
    },
    {
        field: "Class II",
        headerName: "Class II",
        type: 'number',
        flex: 1,
      },
      {
        field: "Class III",
        headerName: "Class III",
        type: 'number',
        flex: 1,
      },
      {
        field: "VIP",
        headerName: "VIP",
        type: 'number',
        flex: 1,
      },
      {
        field: "VVIP",
        headerName: "VVIP",
        type: 'number',
        flex: 1,
      },
  ];

  return (
    <Box m="20px">
      <Header title="Patient Admissions by Room Type" subtitle="Annual Total Admitted Patients" />
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
        <DataGrid checkboxSelection rows={annualRoomOccupancyByRoomType} columns={columns} components={{ Toolbar: GridToolbar }}/>
      </Box>
    </Box>
  );
};

export default PatientAdmissionsByRoomType;
