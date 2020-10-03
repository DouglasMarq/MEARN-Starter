import { LOGIN_ACTION, LOGOUT_ACTION } from '../contants/actionTypes';
import request from 'axios';

export function loginAction(data) {
  return async (dispatch) => {
    try {
        console.log("realizando req:::");
        let req = await request.post('http://localhost:3001/api/users/read', {
            headers: {
            'Content-Type': 'application/json',
        },
        data: {
        }
    })
        console.log(req);
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
