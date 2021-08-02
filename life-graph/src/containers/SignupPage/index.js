import React from "react";
import Button from "../../components/Buttons";
import FormInput from "../../components/FormInput";
import { userSignup } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as yup from "yup";

import "./index.scss";
const SignupPage = () => {
  const dispatch = useDispatch();
  const payload = {
    fullname: "",
    username: "",
    email: "",
    password: "",
  };
  const [error, seterror] = useState("");
  const schema = yup.object().shape({
    fullname: yup.string().required().min(5),
    username: yup.string().required().min(3).max(16),
    email: yup.string().email().required(),
    password: yup.string().max(516).min(6),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup form submitted");
    console.log(payload);
    const validation = await schema.isValid({
      fullname: payload.fullname,
      username: payload.username,
      email: payload.email,
      password: payload.password,
    });
    if (validation) {
      dispatch(userSignup(payload));
    } else {
      schema.validate(payload).catch((err) => seterror(err.errors[0]));
    }
  };

  const onChangeInp = (target) => {
    if (target.id === "fullname") {
      payload.fullname = target.value;
    } else if (target.id === "username") {
      payload.username = target.value;
    } else if (target.id === "email") {
      payload.email = target.value;
    } else if (target.id === "password") {
      payload.password = target.value;
    }
  };

  return (
    <div className="login-fragment">
      <form onSubmit={handleSubmit} className="login-container">
        <h1>Create your acount </h1>
        <p>{error}</p>
        <FormInput
          onChangeInp={onChangeInp}
          placeholder="cannot be less than 5 characters"
          type="text"
          id="fullname"
          label="Full Name"
          width="40vh"
        />
        <FormInput
          onChangeInp={onChangeInp}
          placeholder="cannot be less than 5 characters"
          type="text"
          id="username"
          label="User Name"
          width="40vh"
        />
        <FormInput
          onChangeInp={onChangeInp}
          placeholder="enter a valid email"
          type="email"
          id="email"
          label="Email"
          width="40vh"
        />
        <FormInput
          onChangeInp={onChangeInp}
          placeholder="cannot be less than 6 characters"
          type="password"
          id="password"
          label="Password"
          width="40vh"
        />

        <button type="submit">Signup</button>
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

