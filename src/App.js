import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalTheme from "./styles/globalStyle";
import Home from "./pages/home";
import Progress from "./pages/progess";
import Header from "./components/header";
import Profile from "./pages/profile";

function App() {
  return (
    <BrowserRouter>
      <GlobalTheme />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="plan/:plan"
          element={
            <>
              <Progress />
            </>
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
