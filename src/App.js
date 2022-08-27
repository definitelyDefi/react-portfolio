import React from "react";
import Header from "./components/header/header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import withComponent, { routes } from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={withComponent(route.component)()}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
