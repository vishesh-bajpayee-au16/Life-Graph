import { authActionTypes } from "../actionTypes/actionTypes";

const initialState = {};

const loginReducer = (state, action) => {
  state = initialState || state;

  switch (action.type) {
    case authActionTypes.loginUser:
      return action.payload;

    default:
      return state;
  }
};

export default loginReducer;
