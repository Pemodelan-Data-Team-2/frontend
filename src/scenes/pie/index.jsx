import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import {quarterly2022RevenuesAllCountries} from "../../data/mockDataPieChart"

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart data={quarterly2022RevenuesAllCountries}/>
      </Box>
    </Box>
  );
};

export default Pie;
