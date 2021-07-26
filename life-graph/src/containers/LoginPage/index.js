import React from "react";
import FormInput from "../../components/FormInput";
import Button from "../../components/Buttons";
import "./index.scss";
const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submited");
  };

  return (
    <div className="login-fragment">
      <form onSubmit={handleSubmit} className="login-container">
        <h1>Login through Email</h1>
        <FormInput type="Email" id="email" label="Email" width="40vh" />
        <FormInput
          type="password"
          id="password"
          label="Password"
          width="40vh"
        />
        <Button
          type="submit"
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
      </form>
    </div>
  );
};

export default LoginPage;
