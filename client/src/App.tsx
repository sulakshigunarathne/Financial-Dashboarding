import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";

function App() {
  const theme = useMemo(() => createTheme(themeSettings),[]);
  return <div className="app">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/predictions" element={<div>prediction page</div>} />
          </Routes>
        </Box>
      <CssBaseline />
    </ThemeProvider>
    </BrowserRouter>
  </div>;
   
  
}

export default App;
