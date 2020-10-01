import { LOGIN_ACTION, LOGOUT_ACTION } from '../contants/actionTypes';
import get from 'axios';

export function loginAction(data) {
  return async (dispatch) => {
    try {
      console.log('login: ', await get('http://localhost:3000/api/users/read'));
    } catch (err) {
      console.log(err);
    }
    return dispatch({
      type: LOGIN_ACTION,
      payload: data,
    });
  };
}

export function logoutAction(data) {
  return async (dispatch) => {
    return dispatch({
      type: LOGOUT_ACTION,
      payload: data,
    });
  };
}
