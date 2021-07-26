import React from "react";
import Button from "../../components/Buttons";
import { PATHS } from "../../config";
import "./index.scss";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="banner">
        <h1>Life Graph</h1>
      </div>
      <div className="buttons">
        <Button
          link={PATHS.login}
          text="login"
          color="white"
          backgroundColor="teal"
        />
        <Button
          link={PATHS.signup}
          text="signup"
          color="white"
          backgroundColor="crimson"
        />
        <Button text="help" color="white" backgroundColor="lime" />
      </div>
    </div>
  );
};

export default LandingPage;
