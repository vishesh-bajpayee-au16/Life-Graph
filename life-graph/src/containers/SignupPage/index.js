import React from "react";
import Button from "../../components/Buttons";
import FormInput from "../../components/FormInput";
import "./index.scss";
const SignupPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup form submitted");
  };
  return (
    <div className="login-fragment">
      <form onSubmit={handleSubmit} className="login-container">
        <h1>Create your acount </h1>
        <FormInput type="text" id="fullname" label="Full Name" width="40vh" />
        <FormInput type="text" id="username" label="User Name" width="40vh" />
        <FormInput type="email" id="email" label="Email" width="40vh" />
        <FormInput
          type="password"
          id="password"
          label="Password"
          width="40vh"
        />

        <Button
          type="submit"
          className="login-btn"
          text="Sign up"
          color="white"
          backgroundColor="crimson"
          link="/user/dashboard"
        />
        <Button
          className="login-btn"
          text="Signup with google"
          color="white"
          backgroundColor="grey"
          link="/user/dashboard"
        />
      </form>
    </div>
  );
};

export default SignupPage;
