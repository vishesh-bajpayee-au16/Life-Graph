import React from "react";
import { Route } from "react-router-dom";
import routes from "./routes";

import LandingPage from "./containers/LandingPage";
const App = () => {
  return (
    <div>
      <LandingPage />
      {routes.map((route) => (
        <Route key={Math.random()} {...route} />
      ))}
    </div>
  );
};

export default App;
