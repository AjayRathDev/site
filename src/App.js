import { Box } from "@mui/material";
import React from "react";
import AppRouter from "./router";
import Header from "./components/Header";
import GlobalTheme from "./styles/globalStyle";
import { BrowserRouter } from "react-router-dom";

const MainView = () => {
  return (
    <Box style={{ width: "100%", height: "92vh" }}>
      <Header />
      <AppRouter />
    </Box>
  );
};

function App() {
  return (
    <BrowserRouter>
      <GlobalTheme />
      <MainView />
    </BrowserRouter>
  );
}

export default App;
