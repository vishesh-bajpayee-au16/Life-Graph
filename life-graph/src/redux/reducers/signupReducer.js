import { authActionTypes } from "../actionTypes/actionTypes";

const initialState = {};

const userReducer = (state, action) => {
  state = initialState || state;

  switch (action.type) {
    case authActionTypes.signupUser:
      return {
        state: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
