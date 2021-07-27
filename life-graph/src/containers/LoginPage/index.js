import React from "react";
import FormInput from "../../components/FormInput";
import Button from "../../components/Buttons";
import { userLogin } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
const LoginPage = () => {
  const dispatch = useDispatch();

  const payload = {
    email: "",
    password: "",
  };

  const onChangeInp = (target) => {
    if (target.type === "email") {
      payload.email = target.value;
      console.log(payload);
    } else if (target.type === "password") {
      payload.password = target.value;
      console.log(payload);
    } else {
      console.log("Invalid Type");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(payload));
    console.log("Form submited");
  };

  return (
    <div className="login-fragment">
      <form
        action="/user/dashboard"
        method="get"
        onSubmit={handleSubmit}
        className="login-container"
      >
        <h1>Login through Email</h1>
        <FormInput
          onChangeInp={onChangeInp}
          type="email"
          id="email"
          label="Email"
          width="40vh"
        />
        <FormInput
          type="password"
          id="password"
          label="Password"
          width="40vh"
          onChangeInp={onChangeInp}
        />
        <button type="submit">Login</button>
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
