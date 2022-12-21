import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { patientAdmissions } from "../../data/mockDataTable";
import Header from "../../components/Header";
import axios from "axios";
import { React, useState, useEffect } from 'react';

const PatientAdmissions = () => {
  
  const [data, setData] = useState({
    data: [],
    DataisLoaded: false
  })

  useEffect(() => {
    axios.get(`/data/patient-admissions-by-country`).then((response) => {
      setData({
        data: response.data.data,
        DataisLoaded: true
      })
    });
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "admission_id", headerName: "Admission ID" },
    {
      field: "country",
      headerName: "Country",
      flex: 1,
    },
    {
        field: "patient_id",
        headerName: "Patient ID",
        flex: 1,
    },
    {
        field: "bed_id",
        headerName: "Bed ID",
        flex: 1,
    },
    {
        field: "room_id",
        headerName: "Room ID",
        flex: 1,
    },
    {
        field: "care_center_id",
        headerName: "Care Center ID",
        flex: 1,
    },
    {
        field: "admitted_date",
        headerName: "Admitted Date",
        flex: 1,
    },
    {
        field: "discharged_date",
        headerName: "Discharged Date",
        flex: 1,
    },
    {
        field: "admitted_causes",
        headerName: "Admitted Causes",
        flex: 1,
    },
    {
        field: "room_rate_per_night",
        headerName: "Room Rate per Night",
        flex: 1,
        type: 'number'
    },
    {
        field: "room_rate_total",
        headerName: "Room Rate Total",
        flex: 1,
        type: 'number'
    }
  ];

  console.log(data)
  const DataisLoaded = data.DataisLoaded;
  if (!DataisLoaded) return (
    <Box m="20px">
      <Header title="Patient Admissions" subtitle="Patient Admissions by Country" />
      <Typography>
        Loading...
      </Typography>
    </Box>
  )

  return (
    <Box m="20px">
      <Header title="Patient Admissions" subtitle="Patient Admissions by Country" />
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
        <DataGrid checkboxSelection rows={data.data} columns={columns} components={{ Toolbar: GridToolbar }}/>
      </Box>
    </Box>
  );
};

export default PatientAdmissions;
