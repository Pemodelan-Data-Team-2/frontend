import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import PatientAdmissionsByRoomType from "./scenes/patientAdmissionsByRoomType";
import CareCenters from "./scenes/carecenters";
import PatientAdmissions from "./scenes/patientAdmissions";
import PatientAdmissionsByCareCenter from "./scenes/patientAdmissionsByCareCenter";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/patientAdmissionsByCareCenter" element={<PatientAdmissionsByCareCenter />} />
              <Route path="/patientAdmissionsByRoomType" element={<PatientAdmissionsByRoomType />} />
              <Route path="/carecenters" element={<CareCenters />} />
              <Route path="/patientAdmissions" element={<PatientAdmissions />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
