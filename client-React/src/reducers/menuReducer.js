import { MENU_ACTION, MENU_CONTROLLER } from '../contants/actionTypes';

const initialState = {
  opened: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MENU_CONTROLLER:
      state.opened = action.payload;
      return { ...state, opened: action.payload };
    case MENU_ACTION:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};
