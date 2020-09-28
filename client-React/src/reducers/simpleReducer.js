import { SIMPLE_ACTION } from '../contants/actionTypes'

const initialState = {
  'count': 0
};

export default (state = initialState, action) => {
  console.log('action:::::', action);
  console.log('state:::::', state);
  switch (action.type) {
     case SIMPLE_ACTION:
      return {...state, count: action.payload + 1 };
     default:
      return state
    }
  }
