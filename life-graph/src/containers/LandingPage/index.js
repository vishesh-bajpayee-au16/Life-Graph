import React from "react";
import Button from "../../components/Buttons";
import "./index.scss";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="banner">
        <h1>Life Graph</h1>
      </div>
      <div className="buttons">
        <Button text="login" color="white" backgroundColor="teal" />
        <Button text="signup" color="white" backgroundColor="crimson" />
        <Button text="help" color="white" backgroundColor="lime" />
      </div>
    </div>
  );
};

export default LandingPage;
