import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import simpleState from './simpleReducer';
import menuState from './menuReducer';
import loginState from './loginReducer';

export default (history) =>
  combineReducers({
    simpleState: simpleState,
    menuState: menuState,
    loginState: loginState,
    router: connectRouter(history),
  });
