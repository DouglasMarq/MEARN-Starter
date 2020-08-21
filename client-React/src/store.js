import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk';

import createRootReducer from "./reducers";
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

export default function configureStore() {
 return createStore(
    createRootReducer(history),
    storeEnhancers(applyMiddleware(thunk))
 );
}