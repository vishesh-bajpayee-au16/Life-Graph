import React from "react";
import Button from "../../components/Buttons";
import FormInput from "../../components/FormInput";
import "./index.scss";
const SignupPage = () => {
  return (
    <div className="login-fragment">
      <div className="login-container">
        <h1>Create your acount </h1>
        <FormInput type="email" id="email" label="Full Name" width="40vh" />
        <FormInput type="Email" id="email" label="User Name" width="40vh" />
        <FormInput type="Email" id="email" label="Email" width="40vh" />
        <FormInput
          type="password"
          id="password"
          label="Password"
          width="40vh"
        />

        <Button
          className="login-btn"
          text="Login"
          color="white"
          backgroundColor="crimson"
          link="/user/dashboard"
        />
        <Button
          className="login-btn"
          text="Login with google"
          color="white"
          backgroundColor="grey"
          link="/user/dashboard"
        />
      </div>
    </div>
  );
};

export default SignupPage;
