import React from "react";
import Button from "../../components/Buttons";
import FormInput from "../../components/FormInput";
import { userSignup } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import "./index.scss";
const SignupPage = () => {
  const dispatch = useDispatch();
  const payload = {
    fullname: "",
    username: "",
    email: "",
    password: "",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup form submitted");
    dispatch(userSignup(payload));
    console.log(payload);
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
        <FormInput
          onChangeInp={onChangeInp}
          type="text"
          id="fullname"
          label="Full Name"
          width="40vh"
        />
        <FormInput
          onChangeInp={onChangeInp}
          type="text"
          id="username"
          label="User Name"
          width="40vh"
        />
        <FormInput
          onChangeInp={onChangeInp}
          type="email"
          id="email"
          label="Email"
          width="40vh"
        />
        <FormInput
          onChangeInp={onChangeInp}
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
