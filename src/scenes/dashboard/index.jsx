import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import { annualRevenuesLineChart } from "../../data/mockDataLineChart";
import { roomsCountByCareCenter } from '../../data/mockDataTable'; 
import { annualPatientAdmissionsByRoomType, annualPatientAdmissionsByCountry } from '../../data/mockDataBarChart';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="HOSPITAL OCCUPANCY DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >

        {/*Annual Total Admitted Patients by Room Type Bar Chart - All Countries*/}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Annual Total Admitted Patients by Room Type
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} data={annualPatientAdmissionsByRoomType} keys={['Class I', 'Class II', 'Class III', 'VIP', 'VVIP']}/>
          </Box>
        </Box>

        {/* Annual Total Admitted Patients Bar Chart */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Annual Total Admitted Patients
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} data={annualPatientAdmissionsByCountry} keys={["USA", "IDN"]}/>
          </Box>
        </Box>

        {/* Rooms Count by Care Center */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Rooms Count by Care Center
            </Typography>
          </Box>
          {roomsCountByCareCenter.map((roomCount, i) => (
            <Box
              key={`${roomCount.care_center_id}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {roomCount.care_center_id}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {roomCount.care_center_name}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{roomCount.country}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {roomCount.num_of_rooms}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Annual Revenues Line Chart */}
        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.grey[100]}
              >
                Annual Revenue Generated from Patient Admissions
              </Typography>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.greenAccent[500]}
              >
                in USD
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} data={annualRevenuesLineChart} />
          </Box>
        </Box>

        {/* Total Revenues 2022 Progress Circle */}
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Total Revenues 2022
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" progress="0.5" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box> */}

        {/* 2022 Monthly Revenues Line Chart */}
        {/* <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.grey[100]}
              >
                2022 Monthly Revenue Generated from Patient Admissions
              </Typography>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.greenAccent[500]}
              >
                in USD
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} data={monthlyRevenuesLineChart} />
          </Box>
        </Box> */}

        {/* ROW 3 */}

        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Patient Admissions
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box> */}

        {/* 2022 Quarterly Revenues Line Chart */}
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                color={colors.grey[100]}
              >
                2022 Quarterly Revenue Generated from Patient Admissions
              </Typography>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.greenAccent[400]}
              >
                in USD
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} data={quarterlyRevenuesLineChart} />
          </Box>
        </Box> */}


      </Box>
    </Box>
  );
};

export default Dashboard;
