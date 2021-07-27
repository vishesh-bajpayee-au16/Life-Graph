import { authActionTypes } from "../actionTypes/actionTypes";

export const userLogin = (payload) => {
  return {
    type: authActionTypes.loginUser,
    payload,
  };
};

export const userSignup = (payload) => {
  return {
    type: authActionTypes.signupUser,
    payload,
  };
};
