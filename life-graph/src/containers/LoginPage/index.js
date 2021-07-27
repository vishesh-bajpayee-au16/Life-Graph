import React from "react";
import FormInput from "../../components/FormInput";
import Button from "../../components/Buttons";
import { userLogin } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import "./index.scss";

import * as yup from "yup";

const LoginPage = () => {
  // Validation schema
  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(6).max(516),
  });

  const dispatch = useDispatch();

  const payload = {
    email: "",
    password: "",
  };
  const loginDetails = useSelector((state) => state.loginDetails);
  // State to handle error
  const [error, seterror] = useState("");

  // getting input from formInput component
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

  // handling the submit event
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = await schema.isValid({
      email: payload.email,
      password: payload.password,
    });

    if (validation) {
      dispatch(userLogin(payload));

      await axios.post("http://localhost:8080/user/login", loginDetails);
    } else {
      schema.validate(payload).catch((err) => seterror(err.errors[0]));
    }
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
        <p>{error}</p>
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
