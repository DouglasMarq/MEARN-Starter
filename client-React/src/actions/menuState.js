import { MENU_ACTION, MENU_CONTROLLER } from '../contants/actionTypes';

export function menuAction(data) {
  return (dispatch) => {
    dispatch({
      type: MENU_CONTROLLER,
      payload: data,
    });
  };
}
