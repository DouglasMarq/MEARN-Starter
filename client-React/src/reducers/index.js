import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import simpleState from "./simpleReducer";

export default history =>
    combineReducers({
        simpleState: simpleState,
        router: connectRouter(history)
    });