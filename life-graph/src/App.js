import React from "react";
import { Route } from "react-router-dom";
import routes from "./routes";
import Layout from "./containers/Layout";
const App = () => {
  return (
    <div>
      <Layout>
        {routes.map((route) => (
          <Route key={Math.random()} {...route} />
        ))}
      </Layout>
    </div>
  );
};

export default App;
