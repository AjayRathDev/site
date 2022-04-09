import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import { ROUTES } from "./const";

const AppRouter = () => {
  return (
    <Routes>
      {ROUTES &&
        ROUTES.length &&
        ROUTES.map((route, index) => {
          const Component = route.component;
          return (
            <Route
              path={route.url}
              exact={route.exact}
              element={<Component />}
            />
          );
        })}
    </Routes>
  );
};

export default AppRouter;
