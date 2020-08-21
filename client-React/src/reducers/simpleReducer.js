import { SIMPLE_ACTION } from '../contants/actionTypes'

const initialState = {
  'count': 0
};

export default (state = initialState, action) => {
  console.log('action:', action);
  switch (action.type) {
     case SIMPLE_ACTION:
      return {...state, count: action.payload + state.count };
     default:
      return state
    }
  }