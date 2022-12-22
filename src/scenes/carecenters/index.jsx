import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { carecenters } from "../../data/mockDataTable";
import Header from "../../components/Header";
import axios from "axios";
import { React, useState, useEffect } from 'react';

const CareCenters = () => {

  const [data, setData] = useState({
    data: [],
    DataisLoaded: false
  })

  // const addresses = ['http://127.0.0.1:5000', 'https://backendv2-dot-if-5070-0002.et.r.appspot.com']

  useEffect(() => {
    const addresses = ['http://127.0.0.1:5000', 'https://backendv2-dot-if-5070-0002.et.r.appspot.com']
    axios.get(`${addresses[1]}/data/carecenters`).then((response) => {
      setData({
        data: response.data.data,
        DataisLoaded: true
      })
    });
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "care_center_id", headerName: "Care Center ID" },
    {
      field: "country",
      headerName: "Country",
      flex: 1,
    },
    {
      field: "care_center_name",
      headerName: "Care Center Name",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    }
  ];

  console.log(data)
  const DataisLoaded = data.DataisLoaded;
  if (!DataisLoaded) return (
    <Box m="20px">
      <Header title="MVCH's Care Centers" subtitle="List of Care Centers" />
      <Typography>
        Loading...
      </Typography>
    </Box>
  )

  return (
    <Box m="20px">
      <Header title="MVCH's Care Centers" subtitle="List of Care Centers" />
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

export default CareCenters;
