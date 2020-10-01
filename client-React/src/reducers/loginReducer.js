import { LOGOUT_ACTION, LOGIN_ACTION } from '../contants/actionTypes';

const initialState = {
  logged: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, payload: action.payload };
    case LOGOUT_ACTION:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};
